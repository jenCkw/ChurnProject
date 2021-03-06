import { Field, ObjectType } from "type-graphql";
import {Entity, PrimaryGeneratedColumn, Column, BaseEntity} from "typeorm";


@ObjectType()
@Entity('users')
export class User extends BaseEntity {

    @Field()
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column('text')
    name: string;

    @Field()
    @Column({unique:true})
    email: string;

    @Column('text')
    password: string;

    @Column('int', {default: 0})
    tokenVersion : number;

}
