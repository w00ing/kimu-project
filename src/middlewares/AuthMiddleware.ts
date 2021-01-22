import { User } from "./../entity/User";
import { getRepository } from "typeorm";
import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";
import JwtModule from "../modules/JwtModule";
import util from "../modules/util";
import statusCode from "../modules/statusCode";
import responseMessage from "../modules/responseMessage";
import WrongAuthenticationTokenException from "../exceptions/WrongAuthenticationTokenException";
import AuthenticationTokenMissingException from "../exceptions/AuthenticationTokenMissingException";

class AuthMiddleware {
  private jwt = new JwtModule();
  private TOKEN_EXPIRED = -3;
  private TOKEN_INVALID = -2;
  private userRepo = getRepository(User);
  public checkToken = () => {
    return async (req: Request, res: Response, next: NextFunction) => {
      const cookies = req.cookies;
      if (cookies && cookies.Authorization) {
        const token = cookies.Authorization;
        try {
          const decodedToken = this.jwt.verify(token);
          if (decodedToken === this.TOKEN_EXPIRED || this.TOKEN_INVALID) {
            next(new WrongAuthenticationTokenException());
          }
          const id = decodedToken.id;
          const userInfo = await this.userRepo.findOne({ where: { id } });
          req.user = userInfo;
          next();
        } catch (e) {
          console.log(e);
          next(new WrongAuthenticationTokenException());
        }
      } else {
        next(new AuthenticationTokenMissingException());
      }
    };
  };
}

export default AuthMiddleware;
