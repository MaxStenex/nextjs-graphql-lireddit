import { Query, Resolver } from "type-graphql";
import { Post } from "../../../entities/Post";

@Resolver()
export class PostsResolver {
  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    const posts = await Post.find();

    return posts;
  }
}
