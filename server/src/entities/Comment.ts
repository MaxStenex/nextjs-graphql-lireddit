import { MaxLength, MinLength } from "class-validator";
import { Field, ObjectType } from "type-graphql";
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@ObjectType()
@Entity()
export class Comment extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @MinLength(1, {
    message: "Minimum title length is 1",
  })
  @MaxLength(50, {
    message: "Maximum title length is 150",
  })
  @Field()
  @Column()
  text: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.comments)
  creator: User;

  @ManyToOne(() => Post, (post) => post.comments)
  post: Post;

  @Field()
  @CreateDateColumn()
  createdAt: string;
}
