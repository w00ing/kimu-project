import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { BaseController } from "./BaseController";
import { User } from "../entity/User";
import logging from "../config/logging";
import responseMessage from "../modules/responseMessage";
import InternalServerException from "../exceptions/InternalServerException";
import ConflictException from "../exceptions/ConflictException";
import bcrypt from "bcrypt";
import JwtModule from "../modules/JwtModule";
import { TokenData } from "../interfaces/TokenData";
import WrongCredentialsException from "../exceptions/WrongCredentialsException";
import { CreateUserDto } from "src/dto/userDto";
import { SocialIssue } from "../entity/SocialIssue";
import NoSuchSocialIssueException from "src/exceptions/NoSuchSocialIssueException";

class UsersController extends BaseController {
  private userRepo = getRepository(User);
  private socialIssueRepo = getRepository(SocialIssue);
  private NAMESPACE = "Users Controller";
  private jwt = new JwtModule();

  // TODO: 전화번호 인증
  // Create User
  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, `Create a user`);

    const createUserDto: CreateUserDto = req.body;
    const { socialIssueNames, ...userData } = createUserDto;
    try {
      // Handle exceptions
      const socialIssues = await this.getSocialIssues(socialIssueNames);
      console.log("result", socialIssues);
      if (!socialIssues) {
        return next(new NoSuchSocialIssueException());
      }
      const alreadyUser = await this.findByEmail(userData.email);
      if (alreadyUser) {
        return next(new ConflictException(responseMessage.ALREADY_USER));
      }

      // Create User
      const hashedPassword = await bcrypt.hash(userData.password, 10);
      const user = this.userRepo.create({
        ...userData,
        socialIssues,
        password: hashedPassword,
      });
      console.log("user", user);
      await this.userRepo.save(user);
      user.password = undefined;

      // Get Token and add it to Cookie
      const tokenData: TokenData = this.jwt.createToken(user);
      res.setHeader("Set-Cookie", [this.createCookieWithJwtToken(tokenData)]);
      this.OK(res, responseMessage.CREATE_USER_SUCCESS, user);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  // Login
  public login = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Login");
    const { email, password } = req.body;
    try {
      const user = await this.findByEmail(email);
      console.log(user);
      if (user) {
        const isPasswordMatching = await bcrypt.compare(password, user.password);
        if (isPasswordMatching) {
          user.password = undefined;
          const tokenData: TokenData = this.jwt.createToken(user);
          res.setHeader("Set-Cookie", [this.createCookieWithJwtToken(tokenData)]);
          this.OK(res, responseMessage.LOGIN_SUCCESS, user);
        } else {
          next(new WrongCredentialsException());
        }
      }
    } catch (e) {
      console.log(e);
      next(new WrongCredentialsException());
    }
  };

  // Logout
  public logout = (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Logout");
    res.setHeader("Set-Cookie", [this.getCookieForLogOut()]);
    this.OK(res, responseMessage.LOGOUT_SUCCESS);
  };

  // Get All Users
  public getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, `Get all users`);

    try {
      const users = await this.userRepo.find();
      this.OK(res, responseMessage.GET_ALL_USERS_SUCCESS, users);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  // Methods below will be used only inside of this Class
  private createCookieWithJwtToken(tokenData: TokenData) {
    return `Authorization=${tokenData.accessToken}; HttpOnly; Path=/; Max-Age=${tokenData.expiresIn}`;
  }

  private getCookieForLogOut() {
    return `Authorization=; HttpOnly; Path=/; Max-age=0`;
  }

  private async getSocialIssues(socialIssueNames: string[]) {
    const socialIssues = [];
    for (let i = 0; i < socialIssueNames.length; i++) {
      try {
        const socialIssue = await this.socialIssueRepo.findOneOrFail({
          where: { name: socialIssueNames[i] },
        });
        socialIssues.push(socialIssue);
      } catch (e) {
        console.log(e);
        return false;
      }
    }
    console.log(socialIssues);
    return socialIssues;
  }

  private findByEmail = async (email: string) => {
    const result = await this.userRepo.findOne({ email });
    console.log(result);
    return result;
  };
}

export default UsersController;
