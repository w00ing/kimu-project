import { NextFunction, Request, Response } from "express";
import logging from "src/config/logging";
import { Product } from "src/entity/Product";
import InternalServerException from "src/exceptions/InternalServerException";
import responseMessage from "src/modules/responseMessage";
import { getRepository } from "typeorm";
import { BaseController } from "./BaseController";

export class ProductController extends BaseController {
  private productRepo = getRepository(Product);
  private NAMESPACE = "Products Controller";

  public getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, `Get all posts`);

    try {
      const [products, count] = await this.productRepo.findAndCount();
      this.OK(res, responseMessage.GET_ALL_PRODUCTS_SUCCESS, { products, count });
    } catch (e) {
      next(new InternalServerException());
    }
  };
}
