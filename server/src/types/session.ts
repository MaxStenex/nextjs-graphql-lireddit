import { Session } from "express-session";
console.log(Session);

declare module "express-session" {
  interface Session {
    userId: number;
  }
}
