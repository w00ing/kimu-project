import express, { Response } from "express";
import { Address } from "src/entity/Address";
import { Cart } from "src/entity/Cart";
import { Coupon } from "src/entity/Coupon";
import { Issuedcoupon } from "src/entity/Issuedcoupon";
import { Order } from "src/entity/Order";
import { OrderProduct } from "src/entity/OrderProduct";
import { Product } from "src/entity/Product";
import { Category, Subcategory, Topic } from "src/entity/ProductClassification";
import { Review } from "src/entity/Review";
import { SocialIssue } from "src/entity/SocialIssue";
import { User } from "src/entity/User";
import { getRepository, Repository } from "typeorm";
import statusCode from "../modules/statusCode";
import util from "../modules/util";

export abstract class BaseController {
  userRepo: Repository<User>;
  addressRepo: Repository<Address>;
  productRepo: Repository<Product>;
  categoryRepo: Repository<Category>;
  subcategoryRepo: Repository<Subcategory>;
  topicRepo: Repository<Topic>;
  orderRepo: Repository<Order>;
  orderProductRepo: Repository<OrderProduct>;
  cartRepo: Repository<Cart>;
  couponRepo: Repository<Coupon>;
  issuedcouponRepo: Repository<Issuedcoupon>;
  reviewRepo: Repository<Review>;
  socialIssueRepo: Repository<SocialIssue>;
  constructor() {
    this.userRepo = getRepository(User);
    this.addressRepo = getRepository(Address);
    this.productRepo = getRepository(Product);
    this.categoryRepo = getRepository(Category);
    this.issuedcouponRepo = getRepository(Issuedcoupon);
    this.subcategoryRepo = getRepository(Subcategory);
    this.topicRepo = getRepository(Topic);
    this.orderRepo = getRepository(Order);
    this.orderProductRepo = getRepository(OrderProduct);
    this.cartRepo = getRepository(Cart);
    this.couponRepo = getRepository(Coupon);
    this.reviewRepo = getRepository(Review);
    this.socialIssueRepo = getRepository(SocialIssue);
  }

  public OK<T>(res: Response, message: string, data?: T) {
    res.type("application/json");
    return res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message, data));
  }
}
