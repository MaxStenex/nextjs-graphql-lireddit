import { buildSchema } from "type-graphql";
import { CreateCommentResolver } from "./resolvers/comment/createComment";
import { CreatePostResolver } from "./resolvers/posts/createPost";
import { PostResolver } from "./resolvers/posts/post";
import { PostsResolver } from "./resolvers/posts/posts";
import { LoginResolver } from "./resolvers/user/login";
import { LogoutResolver } from "./resolvers/user/logout";
import { MeResolver } from "./resolvers/user/me";
import { RegisterResolver } from "./resolvers/user/register";
import { VoteResolver } from "./resolvers/vote/vote";

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
      CreateCommentResolver,
    ],
  });
};
