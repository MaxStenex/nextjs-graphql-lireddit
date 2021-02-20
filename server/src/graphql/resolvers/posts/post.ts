import { Arg, Query, Resolver } from "type-graphql";
import { getConnection } from "typeorm";
import { Post } from "../../../entities/Post";

@Resolver()
export class PostResolver {
  @Query(() => Post, { nullable: true })
  async post(@Arg("postId") postId: number): Promise<Post | null> {
    const post = await getConnection()
      .createQueryBuilder<Post>("post", "post")
      .leftJoinAndSelect("post.creator", "creator")
      .where(`post.id = ${postId}`)
      .leftJoinAndSelect("post.comments", "comment")
      .leftJoinAndSelect("comment.creator", "comment_creator")
      .getOne();
    if (!post) {
      return null;
    }

    return post;
  }
}
