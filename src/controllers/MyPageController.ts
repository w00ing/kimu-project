import { NextFunction, Response } from "express";
import InternalServerException from "src/exceptions/InternalServerException";
import RequestWithUser from "src/interfaces/requestWithUser";
import responseMessage from "src/modules/responseMessage";
import { BaseController } from "./BaseController";
import logging from "../config/logging";
import NoSuchDataException from "src/exceptions/NoSuchDataException";
import ConflictException from "src/exceptions/ConflictException";
import RequestWithUserAndFiles from "src/interfaces/requestWithUserAndFiles";

export class MyPageController extends BaseController {
  private NAMESPACE = "MyPage Controller";

  public getMyPageInfo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get Mypage Info");
    const { user } = req;
    try {
      const username = user.name;
      const mileage = user.mileage;
      const issuedcouponCount = await this.issuedcouponRepo
        .createQueryBuilder("issuedcoupon")
        .where("issuedcoupon.userId = :userId", { userId: user.id })
        .getCount();
      const myPageInfo = { username, issuedcouponCount, mileage };
      this.OK(res, responseMessage.GET_MYPAGE_INFO_SUCCESS, myPageInfo);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  public getMyPageCouponsInfo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get Mypage Coupons Info");
    const { user } = req;
    try {
      const issuedcoupons = await this.issuedcouponRepo
        .createQueryBuilder("issuedcoupon")
        .leftJoin("issuedcoupon.coupon", "coupon")
        .where("issuedcoupon.userId = :userId", { userId: user.id })
        .select([
          "coupon.name",
          "coupon.minimumOrderAmount",
          "coupon.discountAmount",
          "coupon.discountRate",
          "issuedcoupon.issuedDate",
          "issuedcoupon.expirationDate",
        ])
        .getMany();
      if (issuedcoupons.length === 0) {
        return next(new NoSuchDataException(responseMessage.NO_ISSUED_COUPONS));
      }
      const issuedcouponsInfo = [];
      for (let ic of issuedcoupons) {
        const info = {
          name: ic.coupon.name,
          discountAmount: ic.coupon.discountAmount,
          discountRate: ic.coupon.discountRate,
          minimumOrderAmount: ic.coupon.minimumOrderAmount,
          issuedDate: ic.issuedDate,
          expirationDate: ic.expirationDate,
        };
        issuedcouponsInfo.push(info);
      }
      this.OK(res, responseMessage.GET_MYPAGE_COUPONS_INFO_SUCCESS, issuedcouponsInfo);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  public getMyPageMileageInfo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get Mypage Mileage Info");
    const { user } = req;
    try {
      const mileageInfo = user.mileage;
      this.OK(res, responseMessage.GET_MYPAGE_MILEAGE_INFO_SUCCESS, mileageInfo);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  public getMyPageOrdersInfo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get Mypage Orders Info");
    const { user } = req;

    try {
      const orders = await this.orderRepo
        .createQueryBuilder("order")
        .where("order.userId = :userId", { userId: user.id })
        .leftJoinAndSelect("order.orderProducts", "orderProduct")
        .leftJoinAndSelect("orderProduct.product", "product")
        .addSelect(["order.orderDateTime", "order.id", "product.productImages"])
        .getMany();
      if (!orders) {
        return next(new NoSuchDataException(responseMessage.NO_ORDERS_OF_THIS_USER));
      }
      const ordersInfo = [];
      for (let order of orders) {
        const orderInfo = {
          orderNumber: order.id,
          orderDateTime: order.orderDateTime,
          firstProductImage: order.orderProducts[0].product.productImages[0],
          firstProductName: order.orderProducts[0].product.name,
          totalCost: order.totalCost,
        };
        ordersInfo.push(orderInfo);
      }
      this.OK(res, responseMessage.GET_MYPAGE_ORDERS_INFO_SUCCESS, ordersInfo);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  public getMyPageReviewsInfo = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get Mypage Reviews Info");
    const { user } = req;
    try {
      const [reviews, reviewCount] = await this.reviewRepo
        .createQueryBuilder("review")
        .where("review.userId = :userId", { userId: user.id })
        .leftJoinAndSelect("review.orderProduct", "orderProduct")
        .leftJoinAndSelect("review.product", "product")
        .leftJoinAndSelect("orderProduct.order", "order")
        .select([
          "product.name",
          "orderProduct.orderProductOption",
          "product.productImages",
          "order.orderDateTime",
          "review.reviewImages",
          "review.stars",
          "review.content",
          "review.createdAt",
        ])
        .getManyAndCount();
      if (!reviews) {
        return next(new NoSuchDataException(responseMessage.NO_REVIEWS_OF_THIS_USER));
      }
      const reviewsInfo = [];
      for (let review of reviews) {
        const reviewInfo = {
          productName: review.product.name,
          productOption: review.orderProduct.orderProductOption,
          productImage: review.product.productImages[0],
          orderDateTime: review.orderProduct.order.orderDateTime,
          reviewImage: review.reviewImages[0],
          reviewStars: review.stars,
          reviewContent: review.content,
          reviewCreatedAt: review.createdAt,
          username: user.name,
        };
        reviewsInfo.push(reviewInfo);
      }
      this.OK(res, responseMessage.GET_MYPAGE_REVIEWS_INFO_SUCCESS, { reviewCount, reviewsInfo });
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  public getMyPageOrderProductsWithoutReviewInfo = async (
    req: RequestWithUser,
    res: Response,
    next: NextFunction,
  ) => {
    logging.info(this.NAMESPACE, "Get Mypage Order Products Without Reviews Info");

    const { user } = req;

    try {
      const [
        orderProductsWithoutReviews,
        productCount,
      ] = await this.orderProductRepo
        .createQueryBuilder("orderProduct")
        .leftJoinAndSelect("orderProduct.order", "order")
        .leftJoinAndSelect("orderProduct.product", "product")
        .where("orderProduct.didWriteReview = :no", { no: false })
        .andWhere("order.userId = :userId", { userId: user.id })
        .select([
          "orderProduct.id",
          "orderProduct.orderProductOption",
          "product.id",
          "product.name",
          "product.productImages",
          "order.orderDateTime",
        ])
        .getManyAndCount();
      if (!orderProductsWithoutReviews) {
        return next(new NoSuchDataException(responseMessage.NO_ORDERED_PRODUCTS_WITHOUT_REVIEW));
      }
      const orderProductsWithoutReviewsInfo = [];
      for (let orderProduct of orderProductsWithoutReviews) {
        const info = {
          productId: orderProduct.product.id,
          productName: orderProduct.product.name,
          productImage: orderProduct.product.productImages[0],
          productOption: orderProduct.orderProductOption,
          orderDateTime: orderProduct.order.orderDateTime,
          orderProductId: orderProduct.id,
        };
        orderProductsWithoutReviewsInfo.push(info);
      }

      this.OK(res, responseMessage.GET_MYPAGE_ORDERPRODUCTS_WITHOUT_REVIEWS_SUCCESS, {
        productCount,
        orderProductsWithoutReviewsInfo,
      });
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  public getMyPageOrderDetail = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Get Mypage Order Detail");
    const { orderNumber } = req.params;
    try {
      const order = await this.orderRepo
        .createQueryBuilder("order")
        .where("order.id = :orderNumber", { orderNumber })
        .leftJoinAndSelect("order.orderProducts", "orderProduct")
        .leftJoinAndSelect("orderProduct.product", "product")
        .getOne();

      const orderDetail = {
        orderDateTime: order.orderDateTime,
        orderNumber: order.id,
        paymentStatus: order.paymentStatus,
        shippingStatus: order.shippingStatus,
        receiverName: order.receiverName,
        receiverAddress: order.receiverAddress,
        receiverPhoneNumber: order.receiverPhoneNumber,
        totalCost: order.totalCost,
        totalCouponDiscountAmount: order.totalCouponDiscountAmount,
        totalMileageUsageAmount: order.totalMileageUsageAmount,
        shippingCost: order.shippingCost,
        orderProducts: order.orderProducts.map(orderProduct => {
          return {
            productName: orderProduct.product.name,
            productImage: orderProduct.product.productImages[0],
            productPrice: orderProduct.product.price,
            discountAmount: orderProduct.product.discountAmount,
            productOption: orderProduct.orderProductOption,
            quantity: orderProduct.quantity,
          };
        }),
      };
      this.OK(res, responseMessage.GET_MYPAGE_ORDER_DETAIL_SUCCESS, orderDetail);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  public myPageIssueCoupon = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    logging.info(this.NAMESPACE, "Issue a Coupon in Mypage");
    const { user } = req;
    const { code } = req.body;
    try {
      const coupon = await this.couponRepo.findOne({ code });
      if (!coupon) {
        return next(new NoSuchDataException(responseMessage.NO_SUCH_COUPON));
      }
      const alreadyIssuedCoupon = await this.issuedcouponRepo.findOne({ userId: user.id, code });
      if (alreadyIssuedCoupon) {
        return next(new ConflictException(responseMessage.ALREADY_ISSUED_COUPON_FOR_THIS_USER));
      }

      const issuedCoupon = this.issuedcouponRepo.create({
        couponId: coupon.id,
        userId: user.id,
        code,
        expirationDate: coupon.expirationDate,
      });

      await this.issuedcouponRepo.save(issuedCoupon);

      const issuedCouponInfo = {
        code,
        expirationDate: issuedCoupon.expirationDate,
        issuedDate: issuedCoupon.issuedDate,
      };
      this.OK(res, responseMessage.MYPAGE_ISSUE_COUPON_SUCCESS, issuedCouponInfo);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };

  public myPageWriteReview = async (
    req: RequestWithUserAndFiles,
    res: Response,
    next: NextFunction,
  ) => {
    const { user } = req;
    const { stars, content, productId, orderProductId } = req.body;
    const imageUrls = req.files.map(file => file.location);
    try {
      const alreadyReview = await this.reviewRepo.findOne({ orderProduct: orderProductId });
      if (alreadyReview) {
        return next(new ConflictException(responseMessage.ALREADY_REVIEW));
      }
      const review = this.reviewRepo.create({
        userId: user.id,
        stars: parseFloat(stars),
        content,
        productId,
        orderProduct: orderProductId,
        reviewImages: imageUrls,
      });
      await this.userRepo.update(user.id, { mileage: user.mileage + 500 });
      await this.orderProductRepo.update({ id: orderProductId }, { didWriteReview: true });

      await this.reviewRepo.save(review);

      this.OK(res, responseMessage.MYPAGE_WRITE_REVIEW_SUCCESS, review);
    } catch (e) {
      console.log(e);
      next(new InternalServerException());
    }
  };
}
