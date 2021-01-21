import express, { Response } from "express";
import statusCode from "../modules/statusCode";
import util from "../modules/util";

export abstract class BaseController {
  public OK<T>(res: Response, message: string, data: T) {
    res.type("application/json");
    return res.status(statusCode.OK).send(util.success(statusCode.OK, message, data));
  }
}
