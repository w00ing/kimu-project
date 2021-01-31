import { NextFunction, Request, Response } from "express";
import logging from "src/config/logging";
import { Product } from "src/entity/Product";
import { Category, Subcategory } from "src/entity/ProductClassification";
import InternalServerException from "src/exceptions/InternalServerException";
import responseMessage from "src/modules/responseMessage";
import { createQueryBuilder, getRepository } from "typeorm";
import { BaseController } from "./BaseController";
import NoSuchDataException from "src/exceptions/NoSuchDataException";
import { Review } from "src/entity/Review";

export class ProductController extends BaseController {
  private productRepo = getRepository(Product);
  private categoryRepo = getRepository(Category);
  private reviewRepo = getRepository(Review);
  private subcategoryRepo = getRepository(Subcategory);
  private NAMESPACE = "Products Controller";

  public getAllProducts = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, `Get all posts`);

    try {
      const [products, count] = await this.productRepo.findAndCount();
      this.OK(res, responseMessage.GET_ALL_PRODUCTS_SUCCESS, { count, products });
    } catch (e) {
      next(new InternalServerException());
    }
  };

  public getSubcategoryProducts = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get All products with given subcategory");
    const { subcategoryId } = req.params;
    try {
      const subcategory = await this.subcategoryRepo.findOne({
        where: { id: subcategoryId },
      });
      if (!subcategory) {
        return next(new NoSuchDataException(responseMessage.NO_SUCH_SUBCATEGORY));
      }
      const products = await this.productRepo
        .createQueryBuilder("product")
        .leftJoin("product.topics", "topic")
        .where("product.subcategory.id = :subcategoryId", { subcategoryId })
        .andWhere("topic.isUsed = :isUsed", { isUsed: true })
        .select([
          "product.id",
          "product.productImages",
          "product.name",
          "product.price",
          "product.isDiscounted",
          "product.discountAmount",
          "topic.name",
          "topic.id",
        ])
        .getMany();
      this.OK(res, responseMessage.GET_PRODUCTS_WITH_GIVEN_SUBCATEGORY_SUCCESS, products);
    } catch (e) {
      next(new InternalServerException());
    }
  };
}
