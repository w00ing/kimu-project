import { NextFunction } from "express";
import { Response } from "express";
import { Request } from "express";
import HttpException from "../exceptions/HttpException";
import util from "../modules/util";

const errorMiddleware = (
  error: HttpException,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const status = error.status || 500;
  const message = error.message || "Something went wrong";
  console.log("error");
  return res.status(status).json(util.fail(status, message));
};

export default errorMiddleware;
