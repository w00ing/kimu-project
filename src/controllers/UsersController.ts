import { Request, Response, NextFunction } from "express";
import { getRepository } from "typeorm";
import { BaseController } from "./BaseController";
import { User } from "../entity/User";
import logging from "../config/logging";
import responseMessage from "../modules/responseMessage";
import InternalServerException from "../exceptions/InternalServerException";
import ConflictException from "../exceptions/ConflictException";
import bcrypt from "bcrypt";

class UsersController extends BaseController {
  private userRepo = getRepository(User);
  private NAMESPACE = "Users Controller";

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
      this.OK(res, responseMessage.CREATE_USER_SUCCESS, user);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
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

  // public getOneUser

  private findByEmail = async (email: string) => {
    return await this.userRepo.findOne({ email });
  };
}

export default UsersController;
