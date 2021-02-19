import { Request, Response, NextFunction } from "express";
import { BaseController } from "./BaseController";
import logging from "../config/logging";
import responseMessage from "../modules/responseMessage";
import InternalServerException from "../exceptions/InternalServerException";
import ConflictException from "../exceptions/ConflictException";
import bcrypt from "bcrypt";
import JwtModule from "../modules/JwtModule";
import { TokenData } from "../interfaces/TokenData";
import WrongCredentialsException from "../exceptions/WrongCredentialsException";
import {
  CreateUserDto,
  LoginUserDto,
  UpdateUserInfoDto,
  UpdateUserPasswordDto,
  UpdateUserSocialIssuesDto,
} from "src/dto/userDto";
import NoSuchDataException from "src/exceptions/NoSuchDataException";
import RequestWithUser from "../interfaces/requestWithUser";
import { User } from "src/entity/User";
import { SocialIssue } from "src/entity/SocialIssue";

class UsersController extends BaseController {
  private NAMESPACE = "Users Controller";
  private jwt = new JwtModule();

  // TODO: 전화번호 인증
  // Create User
  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    logging.info(this.NAMESPACE, `Create a user`);

    const createUserDto: CreateUserDto = req.body;
    const { socialIssueNames, ...userData } = createUserDto;
    try {
      // Handle exceptions
      const socialIssues = await this.getSocialIssues(socialIssueNames);
      if (!socialIssues) {
        return next(
          new NoSuchDataException(responseMessage.NO_SUCH_SOCIAL_ISSUE),
        );
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
        // TODO: revert back to hashed password
        password: userData.password,
      });
      console.log("user", user);
      await this.userRepo.save(user);
      user.password = undefined;

      // Get Token and add it to Cookie
      const tokenData: TokenData = this.jwt.createToken(user);
      const { accessToken } = tokenData;
      // res.setHeader("Set-Cookie", [this.createCookieWithJwtToken(tokenData)]);

      this.OK(res, responseMessage.CREATE_USER_SUCCESS, { user, accessToken });
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  // Login
  // TODO: Make login with hashed version temporarily. Remove on production
  public login = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Login");
    const userData: LoginUserDto = req.body;
    try {
      const user = await this.findByEmail(userData.email, true);
      console.log(user);
      if (!user) {
        return next(new WrongCredentialsException());
      }
      // const isPasswordMatching = await bcrypt.compare(userData.password, user.password);
      const isPasswordMatching = userData.password === user.password;
      console.log(userData.password);
      console.log(user.password);
      if (isPasswordMatching) {
        user.password = undefined;
        const tokenData: TokenData = this.jwt.createToken(user);
        console.log(tokenData.expiresIn);
        const { accessToken } = tokenData;
        // res.setHeader("Set-Cookie", [this.createCookieWithJwtToken(tokenData)]);

        this.OK(res, responseMessage.LOGIN_SUCCESS, { user, accessToken });
      } else {
        return next(new WrongCredentialsException());
      }
    } catch (e) {
      console.log(e);
      next(new WrongCredentialsException());
    }
  };

  // Logout
  // No longer used
  public logout = (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Logout");
    res.setHeader("Set-Cookie", [this.getCookieForLogOut()]);
    this.OK(res, responseMessage.LOGOUT_SUCCESS);
  };

  // Get All Users
  public getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    logging.info(this.NAMESPACE, `Get all users`);

    try {
      const users = await this.userRepo.find();
      this.OK(res, responseMessage.GET_ALL_USERS_SUCCESS, users);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  // Update Password
  public updateUserPassword = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction,
  ) => {
    logging.info(this.NAMESPACE, `Change password`);

    const { user } = req;
    const passwordData: UpdateUserPasswordDto = req.body;
    try {
      const hashedPassword = await bcrypt.hash(passwordData.password, 10);
      await this.userRepo.update(user.id, { password: hashedPassword });
      user.password = undefined;
      this.OK(res, responseMessage.UPDATE_USER_PASSWORD_SUCCESS, user);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  // Update User Info
  public updateUserInfo = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction,
  ) => {
    logging.info(this.NAMESPACE, `Change User Info`);

    const { user } = req;
    const updateUserInfoDto: UpdateUserInfoDto = req.body;
    const { socialIssueNames, ...updateData } = updateUserInfoDto;
    try {
      const socialIssues = await this.getSocialIssues(socialIssueNames);
      if (!socialIssues) {
        return next(
          new NoSuchDataException(responseMessage.NO_SUCH_SOCIAL_ISSUE),
        );
      }
      await this.userRepo
        .createQueryBuilder()
        .update(User)
        .set(updateData)
        .where("id = :userId", { userId: user.id })
        .execute();
      const updatedUser = await this.userRepo.findOne(user.id);
      updatedUser.socialIssues = socialIssues;
      await this.userRepo.save(updatedUser);
      this.OK(res, responseMessage.UPDATE_USER_INFO_SUCCESS, updatedUser);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  public checkDuplicateUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    logging.info(this.NAMESPACE, "Check Duplicate User");
    const { email } = req.body;
    try {
      const alreadyUser = await this.userRepo.findOne({ where: { email } });
      if (alreadyUser) {
        return this.OK(res, responseMessage.ALREADY_USER);
      }
      this.OK(res, responseMessage.EMAIL_AVAILABLE);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  // Methods below will be used only inside of this Class
  private createCookieWithJwtToken(tokenData: TokenData) {
    // return `Authorization=${tokenData.accessToken}; HttpOnly; Path=/; Max-Age=${tokenData.expiresIn}`;
    return `Authorization=${tokenData.accessToken}; Path=/; Max-Age=${tokenData.expiresIn}; SameSite=None; Secure;`;
  }

  private getCookieForLogOut() {
    // return `Authorization=; HttpOnly; Path=/; Max-age=0`;
    return `Authorization=; Path=/; Max-age=0; SameSite=None; Secure;`;
  }

  private async getSocialIssues(socialIssueNames: string[]) {
    const socialIssues: SocialIssue[] = [];
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
    return socialIssues;
  }

  private findByEmail = async (email: string, password: boolean = false) => {
    if (password) {
      return await this.userRepo
        .createQueryBuilder("user")
        .where("user.email = :email", { email })
        .addSelect("user.password")
        .getOne();
    } else {
      return await this.userRepo.findOne({ email });
    }
  };
}

export default UsersController;
