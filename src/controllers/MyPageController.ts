import { NextFunction, Response } from "express";
import InternalServerException from "src/exceptions/InternalServerException";
import RequestWithUser from "src/interfaces/requestWithUser";
import responseMessage from "src/modules/responseMessage";
import { BaseController } from "./BaseController";
import logging from "../config/logging";

export class MyPageController extends BaseController {
  // Get User Info
  private NAMESPACE = "MyPage Controller";

  public getUserInfo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get User Info");
    const { user } = req;
    try {
      const user = await this.userRepo.find();
      this.OK(res, responseMessage.GET_USER_INFO_SUCCESS, user);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };
}
