import "reflect-metadata";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema, Query, Resolver } from "type-graphql";

@Resolver()
class HelloResolver {
  @Query(() => String)
  async helloWorld() {
    return "Hello, world!";
  }
}

const main = async () => {
  const schema = await buildSchema({
    resolvers: [HelloResolver],
  });

  const server = new ApolloServer({ schema });

  const app = express();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

main();
