import { NextFunction, Request, Response } from "express";
import logging from "src/config/logging";
import { Product } from "src/entity/Product";
import { Category, Subcategory } from "src/entity/ProductClassification";
import InternalServerException from "src/exceptions/InternalServerException";
import responseMessage from "src/modules/responseMessage";
import { getRepository } from "typeorm";
import { BaseController } from "./BaseController";

export class CategoryController extends BaseController {
  private categoryRepo = getRepository(Category);
  private subcategoryRepo = getRepository(Subcategory);
  private productRepo = getRepository(Product);
  private NAMESPACE = "Categorys Controller";

  public getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get all categories");
    try {
      const categories = await this.categoryRepo.find({ relations: ["subcategories"] });

      this.OK(res, responseMessage.GET_ALL_CATEGORIES_SUCCESS, categories);
    } catch (e) {
      next(new InternalServerException());
    }
  };
}
