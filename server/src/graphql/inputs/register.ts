import { IsEmail, MinLength, MaxLength } from "class-validator";
import { Field, InputType } from "type-graphql";
import { IsEmailAlreadyExist } from "../../utils/isEmailAlreadyExist";

@InputType()
export class RegisterInput {
  @IsEmailAlreadyExist({ message: "Email already used" })
  @IsEmail()
  @Field()
  email: string;

  @MinLength(3, {
    message: "Minimum username length is 3",
  })
  @MaxLength(255, {
    message: "Maximum username length is 50",
  })
  @Field()
  username: string;

  @MinLength(5, {
    message: "Minimum password length is 5",
  })
  @MaxLength(255, {
    message: "Maximum password length is 255",
  })
  @Field()
  password: string;
}
