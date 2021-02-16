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

  @Field()
  @Column({ default: 0 })
  votesCount: number;

  @OneToMany(() => Vote, (vote) => vote.post)
  votes: Vote[];

  @Field()
  votedByUser: boolean;

  @Field()
  @CreateDateColumn()
  createdAt: string;
}
