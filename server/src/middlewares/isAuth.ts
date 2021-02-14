import { MiddlewareFn } from "type-graphql";
import { MyContext } from "../types/MyContext";

export const isAuth: MiddlewareFn<MyContext> = async ({ context: { req } }, next) => {
  const userId = req.session.userId;
  if (!userId) {
    throw new Error("Not authenticated");
  }

  return next();
};
