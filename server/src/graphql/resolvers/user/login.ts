import { Resolver, Mutation, Arg, Ctx } from "type-graphql";
import { User } from "../../../entities/User";
import argon2 from "argon2";
import { MyContext } from "../../../types/MyContext";

@Resolver()
export class LoginResolver {
  @Mutation(() => User)
  async login(
    @Arg("username") username: string,
    @Arg("password") password: string,
    @Ctx() ctx: MyContext
  ): Promise<User> {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw new Error("Invalid username or password");
    }

    const isValidPassword = await argon2.verify(user.password, password);
    if (!isValidPassword) {
      throw new Error("Invalid username or password");
    }

    ctx.req.session.userId = user.id;

    return user;
  }
}
