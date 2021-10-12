import { Field, ObjectType } from "type-graphql";
import {Entity, Column, BaseEntity, PrimaryColumn} from "typeorm";


@ObjectType()
@Entity('customers')
export class Customer extends BaseEntity {

    @Field()
    @PrimaryColumn()
    id: string;

    @Field()
    @Column('text')
    firstname: string;

    @Field()
    @Column()
    lastname: string;

    @Field()
    @Column('text')
    gender: string;

    @Field()
    @Column('text')
    address: string;

    @Field()
    @Column({unique:true})
    phone: string;

}
