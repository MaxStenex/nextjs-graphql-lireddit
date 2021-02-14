import { validateOrReject } from "class-validator";
import { Resolver, Mutation, Arg, Ctx, UseMiddleware } from "type-graphql";
import { Post } from "../../../entities/Post";
import { User } from "../../../entities/User";
import { isAuth } from "../../../middlewares/isAuth";
import { MyContext } from "../../../types/MyContext";

@Resolver()
export class CreatePostResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Post)
  async createPost(
    @Arg("title") title: string,
    @Arg("text") text: string,
    @Ctx() ctx: MyContext
  ): Promise<Post> {
    const creator = await User.findOne(ctx.req.session.userId);
    if (!creator) {
      throw new Error("Not authenticated");
    }
    const post = Post.create({ title, text });
    post.user = creator;
    await validateOrReject(post);
    await post.save();

    return post;
  }
}
