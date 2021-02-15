import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";
import { Post } from "../../../entities/Post";
import { User } from "../../../entities/User";
import { Vote, VoteTypes } from "../../../entities/Vote";
import { isAuth } from "../../../middlewares/isAuth";
import { MyContext } from "../../../types/MyContext";

@Resolver()
export class VoteResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Vote)
  async vote(
    @Arg("voteType", (type) => VoteTypes) voteType: VoteTypes,
    @Arg("postId") postId: number,
    @Ctx() ctx: MyContext
  ): Promise<Vote> {
    const userId = ctx.req.session.userId;
    const user = await User.findOne(userId);
    if (!user) {
      throw new Error("Not authorized");
    }

    const post = await Post.findOne(postId);
    if (!post) {
      throw new Error("Post not found");
    }

    const vote = Vote.create({ type: voteType });
    vote.post = post;
    vote.user = user;
    if (voteType === VoteTypes.UP) {
      post.votesCount = post.votesCount + 1;
    }
    if (voteType === VoteTypes.DOWN) {
      post.votesCount = post.votesCount - 1;
    }
    await Promise.all([post.save(), vote.save()]);

    return vote;
  }
}
