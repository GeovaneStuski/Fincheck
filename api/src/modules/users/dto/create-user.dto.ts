import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string

  @IsString()
  @IsNotEmpty()
  @MinLength(0)
  password: string
}
