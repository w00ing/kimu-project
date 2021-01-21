import { Type } from "class-transformer";
import {
  IsBoolean,
  IsDate,
  IsEmail,
  IsObject,
  IsString,
} from "class-validator";

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  password: string;

  @IsString()
  phoneNumber: string;

  @IsDate()
  @Type(() => Date)
  birthdate: Date;

  @IsBoolean()
  agreedToMarketingMsgs: boolean;

  @IsObject()
  address: { street: string; city: string; country: string; details: string };
}
