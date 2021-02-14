import { MinLength, MaxLength } from "class-validator";
import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, ManyToOne } from "typeorm";
import { User } from "./User";

@ObjectType()
@Entity()
export class Post extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @MinLength(3, {
    message: "Minimum title length is 3",
  })
  @MaxLength(50, {
    message: "Maximum title length is 50",
  })
  @Field()
  @Column()
  title: string;

  @MinLength(5, {
    message: "Minimum text length is 5",
  })
  @MaxLength(300, {
    message: "Maximum text length is 300",
  })
  @Field()
  @Column()
  text: string;

  @ManyToOne(() => User, (user) => user.posts)
  user: User;
}
