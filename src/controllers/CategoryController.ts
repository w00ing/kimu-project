import { NextFunction, Request, Response } from "express";
import logging from "src/config/logging";
import InternalServerException from "src/exceptions/InternalServerException";
import responseMessage from "src/modules/responseMessage";
import { BaseController } from "./BaseController";

export class CategoryController extends BaseController {
  private NAMESPACE = "Categorys Controller";

  public getAllCategories = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get all categories");
    try {
      const categories = await this.categoryRepo
        .createQueryBuilder("category")
        .leftJoin("category.subcategories", "subcategories")
        .select(["category.id", "category.name", "subcategories.id", "subcategories.name"])
        .getMany();

      for (let category of categories) {
        for (let subcategory of category.subcategories) {
          const { cnt }: { cnt: number } = await this.productRepo
            .createQueryBuilder("product")
            .where("product.subcategory.id = :subcategoryId", {
              subcategoryId: subcategory.id,
            })
            .select("COUNT(1)", "cnt")
            .getRawOne();
          subcategory.productCount = cnt;
        }
      }
      this.OK(res, responseMessage.GET_ALL_CATEGORIES_SUCCESS, categories);
    } catch (e) {
      next(new InternalServerException());
    }
  };
}
