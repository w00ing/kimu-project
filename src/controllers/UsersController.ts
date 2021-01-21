import { User } from "../entity/User";
import { Request, Response, NextFunction } from "express";
import logging from "../config/logging";
import { getRepository } from "typeorm";
import statusCode from "../modules/statusCode";
import responseMessage from "../modules/responseMessage";
import util from "../modules/util";

class UsersController {
  private userRepo = getRepository(User);
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
      return res
        .status(statusCode.INTERNAL_SERVER_ERROR)
        .send(
          util.fail(
            statusCode.INTERNAL_SERVER_ERROR,
            responseMessage.INTERNAL_SERVER_ERROR,
          ),
        );
    }

    // public get
  };
}

export default UsersController;
