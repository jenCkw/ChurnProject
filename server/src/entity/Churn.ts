import { Field, ObjectType } from "type-graphql";
import {Entity, PrimaryColumn, Column, BaseEntity} from "typeorm";


@ObjectType()
@Entity('data_churn')
export class Data_Churn extends BaseEntity{

    @Field()
    @PrimaryColumn()
    customerID: string;

    @Field()
    @Column()
    gender: string;

    @Field()
    @Column()
    seniorCitizen: number;

    @Field()
    @Column()
    partner: string;

    @Field()
    @Column()
    Dependents: string;


    @Field()
    @Column()
    tenure: number;


    @Field()
    @Column()
    PhoneService: string;

    @Column()
    MultipleLines: string;



    @Field()
    @Column()
    InternetService: string;

    @Field()
    @Column()
    OnlineSecurity: string;


    @Field()
    @Column()
    OnlineBackup: string;


    @Field()
    @Column()
    DeviceProtection: string;



    @Field()
    @Column()
    TechSupport: string;


    @Field()
    @Column()
    StreamingTv: string;


    @Field()
    @Column()
    StreamMovies: string;


    @Field()
    @Column()
    Contract: string;

    @Field()
    @Column()
    PaperlessBilling: string;


    @Field()
    @Column()
    PaymentMethod: string;

    @Field()
    @Column()
    MonthlyCharges: number;

    @Field()
    @Column()
    TotalCharges: number;

    @Field()
    @Column()
    churn: string;

}