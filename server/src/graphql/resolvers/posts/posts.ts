import { Arg, Ctx, FieldResolver, Query, Resolver, Root } from "type-graphql";
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
  async posts(
    @Arg("limit") limit: number,
    @Arg("cursor", { nullable: true }) cursorID?: number
  ): Promise<Post[]> {
    let posts;
    if (!cursorID) {
      posts = await getConnection()
        .createQueryBuilder()
        .select("post")
        .from(Post, "post")
        .orderBy("post.id", "DESC")
        .leftJoinAndSelect("post.creator", "post_creator")
        .limit(limit)
        .getMany();

      return posts;
    }
    posts = await getConnection()
      .createQueryBuilder()
      .select("post")
      .from(Post, "post")
      .leftJoinAndSelect("post.creator", "post_creator")
      .where(`post.id < ${cursorID}`)
      .orderBy("post.id", "DESC")
      .limit(limit)
      .getMany();

    return posts;
  }
}
