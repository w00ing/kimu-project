import express, { Response } from "express";
import { Cart } from "src/entity/Cart";
import { Coupon } from "src/entity/Coupon";
import { Order } from "src/entity/Order";
import { Product } from "src/entity/Product";
import { Category, Subcategory, Topic } from "src/entity/ProductClassification";
import { Review } from "src/entity/Review";
import { SocialIssue } from "src/entity/SocialIssue";
import { User } from "src/entity/User";
import { getRepository } from "typeorm";
import statusCode from "../modules/statusCode";
import util from "../modules/util";

export abstract class BaseController {
  public userRepo = getRepository(User);
  public productRepo = getRepository(Product);
  public categoryRepo = getRepository(Category);
  public subcategoryRepo = getRepository(Subcategory);
  public topicRepo = getRepository(Topic);
  public orderRepo = getRepository(Order);
  public cartRepo = getRepository(Cart);
  public couponRepo = getRepository(Coupon);
  public reviewRepo = getRepository(Review);
  public socialIssueRepo = getRepository(SocialIssue);

  public OK<T>(res: Response, message: string, data?: T) {
    res.type("application/json");
    return res.status(statusCode.OK).send(util.success(statusCode.OK, message, data));
  }
}
