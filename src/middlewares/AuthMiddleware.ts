import { User } from "./../entity/User";
import { getRepository } from "typeorm";
import { NextFunction } from "express";
import { Response } from "express";
import JwtModule from "../modules/JwtModule";
import WrongAuthenticationTokenException from "../exceptions/WrongAuthenticationTokenException";
import AuthenticationTokenMissingException from "../exceptions/AuthenticationTokenMissingException";
import RequestWithUser from "src/interfaces/requestWithUser";

class AuthMiddleware {
  private jwt = new JwtModule();
  private TOKEN_EXPIRED = -3;
  private TOKEN_INVALID = -2;
  private userRepo = getRepository(User);

  public checkToken = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const cookies = req.cookies;
    console.log(cookies);
    if (cookies && cookies.Authorization) {
      const token = cookies.Authorization;
      console.log(token);
      try {
        const decodedToken = this.jwt.verify(token);
        console.log(decodedToken);
        if (decodedToken === (this.TOKEN_EXPIRED || this.TOKEN_INVALID)) {
          return next(new WrongAuthenticationTokenException());
        }
        const id = decodedToken.id;
        console.log("id", id);
        const userInfo = await this.userRepo.findOne({ where: { id } });
        req.user = userInfo;
        console.log(req.user);
        return next();
      } catch (e) {
        console.log(e);
        return next(new WrongAuthenticationTokenException());
      }
    } else {
      return next(new AuthenticationTokenMissingException());
    }
  };
}

export default AuthMiddleware;
