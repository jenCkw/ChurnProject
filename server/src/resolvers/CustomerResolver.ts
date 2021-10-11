import { Customer } from '../entity/Customer';
import { Resolver, Query, Mutation, Arg} from 'type-graphql';


@Resolver()
export class CustomerResolver {

    @Query(()=> [Customer])
    customers(){
        return Customer.find();
    }


    @Mutation(()=>Boolean)
    async insertCustomer(
        @Arg('id') id:string,
        @Arg('firstname') firstname: string,
        @Arg('lastname') lastname: string,
        @Arg('gender') gender: string,
        @Arg('address') address: string,
        @Arg('phone') phone: string
    ){
        try {
            Customer.insert({id, firstname, lastname, gender, address, phone})
        } catch (error) {
            console.log(error)
        }
        return true;
    }
}