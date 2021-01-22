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

class UsersController extends BaseController {
  private userRepo = getRepository(User);
  private NAMESPACE = "Users Controller";
  private jwt = new JwtModule();

  public createUser = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, `Create a user`);

    const {
      email,
      name,
      password,
      address,
      phoneNumber,
      birthdate,
      agreedToMarketingMsgs,
    } = req.body;
    try {
      const alreadyUser = await this.findByEmail(email);
      if (alreadyUser) {
        next(new ConflictException(responseMessage.ALREADY_USER));
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = this.userRepo.create({
        email,
        name,
        password: hashedPassword,
        address,
        phoneNumber,
        birthdate,
        agreedToMarketingMsgs,
      });
      await this.userRepo.save(user);
      user.password = undefined;
      const tokenData: TokenData = this.jwt.createToken(user);
      res.setHeader("Set-Cookie", [this.createCookieWithJwtToken(tokenData)]);
      this.OK(res, responseMessage.CREATE_USER_SUCCESS, user);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  public login = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Login");
    const { email, password } = req.body;
    try {
      const user = await this.findByEmail(email);
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

  public logout = (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Logout");
    res.setHeader("Set-Cookie", [this.getCookieForLogOut()]);
    this.OK(res, responseMessage.LOGOUT_SUCCESS);
  };

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

  private findByEmail = async (email: string) => {
    return await this.userRepo.findOneOrFail({ email });
  };
}

export default UsersController;
