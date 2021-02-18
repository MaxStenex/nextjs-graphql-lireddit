import { buildSchema } from "type-graphql";
import { CreatePostResolver } from "../graphql/resolvers/posts/createPost";
import { PostResolver } from "../graphql/resolvers/posts/post";
import { PostsResolver } from "../graphql/resolvers/posts/posts";
import { LoginResolver } from "../graphql/resolvers/user/login";
import { LogoutResolver } from "../graphql/resolvers/user/logout";
import { MeResolver } from "../graphql/resolvers/user/me";
import { RegisterResolver } from "../graphql/resolvers/user/register";
import { VoteResolver } from "../graphql/resolvers/vote/voteResolver";

export const createSchema = async () => {
  return await buildSchema({
    resolvers: [
      RegisterResolver,
      LoginResolver,
      MeResolver,
      PostsResolver,
      CreatePostResolver,
      VoteResolver,
      LogoutResolver,
      PostResolver,
    ],
  });
};
