import { Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
import { getConnection } from "typeorm";
import { Post } from "../../../entities/Post";
import { Vote, VoteTypes } from "../../../entities/Vote";
import { MyContext } from "../../../types/MyContext";

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
  async currentUserVoteType(
    @Root() post: Post,
    @Ctx() ctx: MyContext
  ): Promise<VoteTypes> {
    const userId = ctx.req.session.userId;
    if (!userId) {
      return VoteTypes.NONE;
    }
    const userVote = await getConnection()
      .createQueryBuilder<Vote>("vote", "vote")
      .leftJoinAndSelect("vote.user", "user")
      .where(`user.id = ${userId}`)
      .leftJoinAndSelect("vote.post", "post")
      .andWhere(`post.id = ${post.id}`)
      .getOne();
    if (!userVote) {
      return VoteTypes.NONE;
    }
    return userVote.type;
  }

  @Query(() => [Post])
  async posts(): Promise<Post[]> {
    const posts = await Post.find({ relations: ["creator"] });

    return posts.sort((a, b) => +b.createdAt - +a.createdAt);
  }
}
