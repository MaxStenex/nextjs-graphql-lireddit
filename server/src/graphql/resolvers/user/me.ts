import { Resolver, Query, Ctx } from "type-graphql";
import { User } from "../../../entities/User";
import { MyContext } from "../../../types/MyContext";

@Resolver()
export class MeResolver {
  @Query(() => User)
  async me(@Ctx() ctx: MyContext): Promise<User> {
    const userId = ctx.req.session.userId;
    if (!userId) {
      throw new Error("Not authenticated");
    }
    const user = await User.findOne({ where: { id: userId } });
    if (!user) {
      throw new Error("Not authenticated");
    }
    return user;
  }
}
