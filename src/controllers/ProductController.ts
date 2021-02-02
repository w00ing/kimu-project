import { NextFunction, Request, Response } from "express";
import logging from "src/config/logging";
import { Order } from "src/entity/Order";
import InternalServerException from "src/exceptions/InternalServerException";
import responseMessage from "src/modules/responseMessage";
import { BaseController } from "./BaseController";
import NoSuchDataException from "src/exceptions/NoSuchDataException";

export class ProductController extends BaseController {
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

  public getProductDetail = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get product Info");
    const { productId } = req.params;
    try {
      const product = await this.productRepo.findOne({
        where: { id: productId },
        select: [
          "id",
          "productImages",
          "name",
          "price",
          "isDiscounted",
          "discountAmount",
          "shippingCost",
          "group",
          "isAvailable",
          "quantityAvailable",
        ],
        relations: ["productOptions", "productOptions.optionChoices"],
      });
      if (!product) {
        return next(new NoSuchDataException(responseMessage.NO_SUCH_PRODUCT));
      }
      this.OK(res, responseMessage.GET_PRODUCT_DETAIL_SUCCESS, product);
    } catch (e) {
      next(new InternalServerException());
    }
  };

  public getBundleProducts = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get Bundle Products");
    const { productId } = req.params;
    const group = "a";
    try {
      const products = await this.productRepo
        .createQueryBuilder("product")
        .where("product.id != :productId", { productId })
        .andWhere("product.group = :group", { group })
        .select([
          "product.id",
          "product.productImages",
          "product.name",
          "product.price",
          "product.isDiscounted",
          "product.discountAmount",
        ])
        .getMany();
      this.OK(res, responseMessage.GET_BUNDLE_PRODUCTS_SUCCESS, products);
    } catch (e) {
      next(new InternalServerException());
    }
  };

  public getProductReviews = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get Product Reviews");
    const { productId } = req.params;
    try {
      const reviews = await this.reviewRepo
        .createQueryBuilder("review")
        .leftJoin("review.user", "user")
        .where("review.productId = :productId", { productId })
        .select([
          "review.id",
          "review.stars",
          "review.content",
          "review.createdAt",
          "review.approvedAt",
          "review.reviewImages",
          "user.id",
          "user.name",
        ])
        .getMany();
      const reviewCount = reviews.length;
      this.OK(res, responseMessage.GET_PRODUCT_REVIEWS_SUCCESS, { reviewCount, reviews });
    } catch (e) {
      next(new InternalServerException());
    }
  };

  public getBestProducts = async (req: Request, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get Best Products");
    try {
      const products = await this.productRepo
        .createQueryBuilder("product")
        .select([
          "product.id",
          "product.name",
          "product.productImages",
          "product.price",
          "product.isDiscounted",
          "product.discountAmount",
        ])
        .addSelect(subQuery => {
          return subQuery
            .select("COUNT(*)")
            .from(Order, "order")
            .where("order.productId=product.id");
        }, "orderCount")
        .orderBy("orderCount", "DESC")
        .take(9)
        .getMany();
      // console.log(products);

      this.OK(res, responseMessage.GET_BEST_PRODUCTS_SUCCESS, products);
    } catch (e) {
      next(new InternalServerException());
    }
  };
}
