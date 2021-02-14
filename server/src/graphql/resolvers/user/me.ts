import { Resolver, Query, Ctx, UseMiddleware } from "type-graphql";
import { User } from "../../../entities/User";
import { isAuth } from "../../../middlewares/isAuth";
import { MyContext } from "../../../types/MyContext";

@Resolver()
export class MeResolver {
  @UseMiddleware(isAuth)
  @Query(() => User)
  async me(@Ctx() ctx: MyContext): Promise<User> {
    const userId = ctx.req.session.userId;
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("Not authenticated");
    }
    return user;
  }
}
