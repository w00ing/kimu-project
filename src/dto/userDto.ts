import { Exclude, Type } from "class-transformer";
import { IsArray, IsBoolean, IsDate, IsString } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  email: string;

  @IsString()
  password: string;

  @IsString()
  gender: string;

  @IsString()
  phoneNumber: string;

  @IsDate()
  @Type(type => Date)
  birthdate: Date;

  @IsArray()
  socialIssueNames: string[];

  //   @IsBoolean()
  //   agreedToMarketingMsgs: boolean;
}

export class LoginUserDto {
  @IsString()
  email: string;

  @IsString()
  password: string;
}

export class UpdateUserInfoDto {
  @IsString()
  address: string;

  @IsDate()
  @Type(type => Date)
  birthdate: Date;

  @IsString()
  gender: string;

  @IsArray()
  socialIssueNames: string[];
}

export class UpdateUserPasswordDto {
  @IsString()
  password: string;
}

export class UpdateUserSocialIssuesDto {
  @IsArray()
  socialIssueNames: string[];
}
