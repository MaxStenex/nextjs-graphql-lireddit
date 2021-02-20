import { MinLength, MaxLength } from "class-validator";
import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
  CreateDateColumn,
  OneToMany,
} from "typeorm";
import { User } from "./User";
import { Vote, VoteTypes } from "./Vote";
import { registerEnumType } from "type-graphql";
import { Comment } from "./Comment";

registerEnumType(VoteTypes, {
  name: "VoteTypes",
});

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

  @Field()
  shortText: string;

  @Field(() => User)
  @ManyToOne(() => User, (user) => user.posts)
  creator: User;

  @Field(() => VoteTypes)
  currentUserVoteType: VoteTypes;

  @OneToMany(() => Vote, (vote) => vote.post)
  votes: Vote[];

  @Field()
  @Column({ default: 0 })
  votesCount: number;

  @Field(() => [Comment])
  @OneToMany(() => Comment, (comment) => comment.post)
  comments: Comment[];

  @Field()
  @Column({ default: 0 })
  commentsCount: number;

  @Field()
  @CreateDateColumn()
  createdAt: string;
}
