import { User } from "./../entity/User";
import { getRepository } from "typeorm";
import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";
import JwtModule from "../modules/JwtModule";
import util from "../modules/util";
import statusCode from "../modules/statusCode";
import responseMessage from "../modules/responseMessage";

class AuthMiddleware {
  private jwt = new JwtModule();
  private TOKEN_EXPIRED = -3;
  private TOKEN_INVALID = -2;
  private userRepo = getRepository(User);
  public checkToken = (role: string) => {
    return async (req: Request, res: Response, next: NextFunction) => {
      let token: any;
      if (role === "admin") {
        token = req.headers.admintoken;
      } else if (role === "user") {
        token = req.headers.usertoken;
      }
      if (!token) {
        return res
          .status(statusCode.BAD_REQUEST)
          .send(util.fail(statusCode.BAD_REQUEST, responseMessage.EMPTY_TOKEN));
      }

      const decodedToken = this.jwt.verify(token);
      if (decodedToken === this.TOKEN_EXPIRED) {
        return res
          .status(statusCode.UNAUTHORIZED)
          .send(
            util.fail(statusCode.UNAUTHORIZED, responseMessage.EXPIRED_TOKEN),
          );
      }
      if (decodedToken === this.TOKEN_INVALID) {
        return res
          .status(statusCode.UNAUTHORIZED)
          .send(
            util.fail(statusCode.UNAUTHORIZED, responseMessage.INVALID_TOKEN),
          );
      }

      const id = decodedToken.id;

      if (!id) {
        return res
          .status(statusCode.UNAUTHORIZED)
          .send(
            util.fail(statusCode.UNAUTHORIZED, responseMessage.INVALID_TOKEN),
          );
      } else {
        // if (role === "admin") {
        //   const adminInfo = await Admin.findOne({ where: { id } });
        //   if (!adminInfo) {
        //     return res
        //       .status(statusCode.FORBIDDEN)
        //       .send(
        //         util.fail(statusCode.FORBIDDEN, responseMessage.NOT_ADMIN),
        //       );
        //   }
        //   req.admin = adminInfo;
        // } else if (role === "user") {
        if (role === "user") {
          const userInfo = await this.userRepo.findOne({ where: { id } });
          if (!userInfo) {
            return res
              .status(statusCode.FORBIDDEN)
              .send(
                util.fail(statusCode.FORBIDDEN, responseMessage.LOGIN_REQUIRED),
              );
          }
          req.user = userInfo;
        }
      }
      next();
    };
  };
}

export default AuthMiddleware;
