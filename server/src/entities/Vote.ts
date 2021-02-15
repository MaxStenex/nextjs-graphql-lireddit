import { Field, ObjectType } from "type-graphql";
import { Entity, PrimaryGeneratedColumn, BaseEntity, ManyToOne, Column } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

export enum VoteTypes {
  UP = "UP",
  DOWN = "DOWN",
  NONE = "NONE",
}

@ObjectType()
@Entity()
export class Vote extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "enum", enum: VoteTypes })
  type: VoteTypes;

  @ManyToOne(() => Post, (post) => post.votes)
  post: Post;

  @ManyToOne(() => User, (user) => user.votes)
  user: User;
}
