import { User } from '../entity/User';
import { Arg, Ctx, Field, Int, Mutation, ObjectType, Query, Resolver } from 'type-graphql';
import { hash, compare } from 'bcryptjs';
import { MyContext } from '../interfaces/MyContext';
import { createAccessToken, createRefreshToken } from '../auth/auth';
import { getConnection } from 'typeorm';


@ObjectType()
class LoginResponse{
    @Field()
    accessToken: string
}


@Resolver()
export class UserResolver{

    @Query(()=> [User])
    users(){
        return User.find();
    }

    @Mutation(()=>Boolean)
    async revokeRefreshToken(
        @Arg('userId', ()=> Int) userId:number
    ){
        await getConnection()
        .getRepository(User) 
        .increment({id: userId}, "tokenVersion", 1);
        return true;
    }

    // insert users 
    @Mutation(()=> Boolean)
    async insertUser(
        @Arg("name") name: string,
        @Arg('email') email: string,
        @Arg('password') password: string
    ){
        const hashPassword = await hash(password, 12);
        const user = await User.findOne({ email });
        try {
            if(user){
                return false
            } else {
            await User.insert({
                name,
                email,
                password: hashPassword
            })
        }
        } catch (error) {
            console.log(error)
        }
        return true
    }



    @Mutation(()=> Boolean)
    deleteUser(
        @Arg('id') id:number
    ){

        try {
            User.delete({ id })
        } catch (error) {
            console.log(error)
        }
       
        return true
    }


    @Mutation(()=> LoginResponse)
    async login(
        @Arg('email') email:string, 
        @Arg('password') password:string,
        @Ctx() {res}: MyContext
    ): Promise<LoginResponse>
    {
        const user = await User.findOne({where: { email}});

        if(!user){
            throw new Error('could not find user')
        }

        const valid = await compare(password, user.password);

        if(!valid) throw new Error('bad password')

        res.cookie('cid',createRefreshToken(user)
        ,{httpOnly:true})
        
        return {
            accessToken: createAccessToken(user)
        }
    }

}