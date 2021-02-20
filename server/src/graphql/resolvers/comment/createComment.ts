import { validateOrReject } from "class-validator";
import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";
import { Comment } from "../../../entities/Comment";
import { Post } from "../../../entities/Post";
import { User } from "../../../entities/User";
import { isAuth } from "../../../middlewares/isAuth";
import { MyContext } from "../../../types/MyContext";

@Resolver()
export class CreateCommentResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Comment)
  async createComment(
    @Arg("text") text: string,
    @Arg("postId") postId: number,
    @Ctx() ctx: MyContext
  ): Promise<Comment> {
    const commentCreator = await User.findOne(ctx.req.session.userId);
    if (!commentCreator) {
      throw new Error("Not authenticated");
    }
    const post = await Post.findOne({ where: { id: postId } });
    if (!post) {
      throw new Error("Post not found");
    }

    const comment = Comment.create({ text });
    comment.creator = commentCreator;
    comment.post = post;
    post.commentsCount = post.commentsCount + 1;
    await validateOrReject(comment);
    await Promise.all([comment.save(), post.save()]);

    return comment;
  }
}
