import { Resolver, Mutation, Arg, Ctx, UseMiddleware, Int } from "type-graphql";
import { getConnection } from "typeorm";
import { Post } from "../../../entities/Post";
import { User } from "../../../entities/User";
import { Vote, VoteTypes } from "../../../entities/Vote";
import { isAuth } from "../../../middlewares/isAuth";
import { MyContext } from "../../../types/MyContext";

@Resolver()
export class VoteResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Int)
  async vote(
    @Arg("voteType", (type) => VoteTypes) voteType: VoteTypes,
    @Arg("postId") postId: number,
    @Ctx() ctx: MyContext
  ): Promise<number> {
    const userId = ctx.req.session.userId;
    const user = await User.findOne(userId);
    if (!user) {
      throw new Error("Not authorized");
    }

    const post = await Post.findOne(postId);
    if (!post) {
      throw new Error("Post not found");
    }

    const voteOnCurrentPostByUser = await getConnection()
      .createQueryBuilder<Vote>("vote", "vote")
      .leftJoinAndSelect("vote.post", "post")
      .where(`post.id = ${postId}`)
      .leftJoinAndSelect("vote.user", "user")
      .andWhere(`user.id = ${userId}`)
      .getOne();
    const sameUserVote =
      voteOnCurrentPostByUser && voteOnCurrentPostByUser.type === voteType;

    if (voteType === VoteTypes.NONE) {
      return post.votesCount;
    }

    if (voteType === VoteTypes.UP) {
      if (sameUserVote) {
        post.votesCount = post.votesCount - 1;
      } else if (voteOnCurrentPostByUser) {
        post.votesCount = post.votesCount + 2;
      } else {
        post.votesCount = post.votesCount + 1;
      }
    }

    if (voteType === VoteTypes.DOWN) {
      if (sameUserVote) {
        post.votesCount = post.votesCount + 1;
      } else if (voteOnCurrentPostByUser) {
        post.votesCount = post.votesCount - 2;
      } else {
        post.votesCount = post.votesCount - 1;
      }
    }

    if (!voteOnCurrentPostByUser) {
      const vote = Vote.create({ type: voteType });
      vote.post = post;
      vote.user = user;
      await Promise.all([post.save(), vote.save()]);
      return post.votesCount;
    }

    if (!sameUserVote) {
      voteOnCurrentPostByUser.type = voteType;
      await Promise.all([post.save(), voteOnCurrentPostByUser.save()]);
      return post.votesCount;
    }

    await Promise.all([post.save(), voteOnCurrentPostByUser.remove()]);
    return post.votesCount;
  }
}
