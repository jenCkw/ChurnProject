import "reflect-metadata";
import 'dotenv/config';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema} from 'type-graphql'
import { ChurnResolver } from "./resolvers/ChurnResolver";
import { createConnection } from 'typeorm'
import { UserResolver } from "./resolvers/UserResolver";
import cookieParser from "cookie-parser";
import { verify } from "jsonwebtoken";
import { sendRefreshToken } from "./auth/sendRefreshToken";
import { createRefreshToken, createAccessToken } from "./auth/auth";
import { User } from './entity/User'
import cors from 'cors';
import { CustomerResolver } from "./resolvers/CustomerResolver";



(async () =>{
    const app = express();
    app.use(cors({
        origin:"http://localhost:3000",
        credentials: true
    }))
    app.use(express.json());
    app.use(cookieParser())
    await createConnection();

    app.post('/refresh_token',async (req,res) => {
        const token = req.cookies.cid;

        if(!token){
            return res.send({ok: false, accessToken:''});
        }

        let payload:any = null; 

        try {
           payload = verify(token, process.env.refresh_token!)
        } catch (err) {
            console.log(err);
            return res.send({ok: false, accessToken:''});
        }


        // this is a valid token and 
        // we can send back an access token

        const user = await User.findOne({ id: payload.userId });

        if(!user){
            return res.send({ok: false, accessToken:""})
        }

        if(user.tokenVersion !== payload.tokenVersion){
            return res.send({ok: false, accessToken:""})
        }

        sendRefreshToken(res, createRefreshToken(user))

        return res.send({ok: true, accessToken : createAccessToken(user)})
        
    });


    const apolloServer = new ApolloServer({
       schema: await buildSchema({
           resolvers: [ChurnResolver, UserResolver, CustomerResolver]
       }),
       context : ({req: Request, res: Response}) => ({req: Request, res: Response})
    });


    apolloServer.applyMiddleware({ app, cors:false })


    app.listen(4000,()=>{
        console.log("server run")
    })

})()

