import { Arg, Query, Resolver } from "type-graphql";
import { Post } from "../../../entities/Post";

@Resolver()
export class PostResolver {
  @Query(() => Post, { nullable: true })
  async post(@Arg("postId") postId: number): Promise<Post | null> {
    const post = await Post.findOne({ where: { id: postId }, relations: ["creator"] });
    if (!post) {
      return null;
    }

    return post;
  }
}
