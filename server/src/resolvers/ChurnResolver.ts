import { Data_Churn } from '../entity/Churn'
import { Query, Resolver, UseMiddleware } from 'type-graphql'
import { isAuth } from '../auth/isAuth';

@Resolver()
export class ChurnResolver{

    @Query(()=> String)
    hello(){
        return 'hi!'
    }

    @UseMiddleware(isAuth)
    @Query(()=> [Data_Churn])
    churn(){
        return Data_Churn.find();
    }
}