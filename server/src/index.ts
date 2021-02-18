import "reflect-metadata";
import express from "express";
import cors from "cors";
import session from "express-session";
import connectRedis from "connect-redis";
import Redis from "ioredis";

import { ApolloServer } from "apollo-server-express";
import { createConnection } from "typeorm";
import { createSchema } from "./utils/createSchema";

const main = async () => {
  await createConnection();

  const schema = await createSchema();

  const server = new ApolloServer({ schema, context: ({ req, res }) => ({ req, res }) });
  const app = express();

  const RedisStore = connectRedis(session);
  const redis = new Redis();

  app.use(cors({ credentials: true, origin: "http://localhost:3000" }));

  app.use(
    session({
      store: new RedisStore({
        client: redis,
      }),
      name: "sid",
      secret: "very_secret_key",
      resave: false,
      saveUninitialized: false,
      cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 1000 * 60 * 60 * 24 * 7 * 365, // 7 years
      },
    })
  );

  server.applyMiddleware({ app, cors: false });
  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

main();
