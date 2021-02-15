import { FieldResolver, Query, Resolver, Root } from "type-graphql";
import { Post } from "../../../entities/Post";
import { VoteTypes } from "../../../entities/Vote";

@Resolver((of) => Post)
export class PostsResolver {
  @FieldResolver(() => String)
  shortText(@Root() post: Post): string {
    if (post.text.length > 200) {
      return post.text.slice(0, 197) + "...";
    }
    return post.text;
  }

  @FieldResolver(() => VoteTypes)
  userVoteType(@Root() post: Post): VoteTypes {
    return VoteTypes.NONE;
  }

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    const posts = await Post.find({ relations: ["creator"] });

    return posts;
  }
}
