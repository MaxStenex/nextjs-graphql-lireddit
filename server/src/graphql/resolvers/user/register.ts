import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { User } from "../../../entities/User";
import { RegisterInput } from "../../inputs/register";
import argon2 from "argon2";

@Resolver()
export class RegisterResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello, world!";
  }

  @Mutation(() => User)
  async register(
    @Arg("input") { email, password, username }: RegisterInput
  ): Promise<User> {
    try {
      const hashedPassword = await argon2.hash(password);

      const user = await User.create({
        email,
        username,
        password: hashedPassword,
      }).save();

      return user;
    } catch (error) {
      throw new Error(error);
    }
  }
}
