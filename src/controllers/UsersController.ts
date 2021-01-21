import { CreateUserDto } from "./../dto/CreateUserDto";
import { User } from "../entity/User";
import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";
import { getRepository } from "typeorm";
import statusCode from "../modules/statusCode";
import responseMessage from "../modules/responseMessage";
import util from "../modules/util";
import InternalServerException from "../exceptions/InternalServerException";

class UsersController {
  private userRepo = getRepository(User);
  // private createUserDto = new CreateUserDto()
  private NAMESPACE = "Users Controller";

  public getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    logging.info(this.NAMESPACE, `Get all users`);

    try {
      const users = await this.userRepo.find();
      res
        .status(statusCode.OK)
        .send(
          util.success(
            statusCode.OK,
            responseMessage.GET_ALL_USERS_SUCCESS,
            users,
          ),
        );
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };
  public createUser = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    logging.info(this.NAMESPACE, `Create a user`);
    const CreateUserDto = req;
    try {
      const user = await this.userRepo.find({ where: { CreateUserDto } });
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };
}

export default UsersController;
