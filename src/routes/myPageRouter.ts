import express from "express";
import { MyPageController } from "src/controllers/MyPageController";
import { ConfirmUserDto } from "src/dto/userDto";
import AuthMiddleware from "src/middlewares/AuthMiddleware";
import { uploadReviewImages } from "src/middlewares/multerMiddleware";
import validationMiddleware from "src/middlewares/validationMiddleware";
const myPageRouter = express.Router();
const myPageController = new MyPageController();
const authMiddleware = new AuthMiddleware();

myPageRouter.get("/", authMiddleware.checkToken, myPageController.getMyPageInfo);

myPageRouter.get("/coupons", authMiddleware.checkToken, myPageController.getMyPageCouponsInfo);

myPageRouter.post("/coupons", authMiddleware.checkToken, myPageController.myPageIssueCoupon);

myPageRouter.get("/mileage", authMiddleware.checkToken, myPageController.getMyPageMileageInfo);

myPageRouter.get("/orders", authMiddleware.checkToken, myPageController.getMyPageOrdersInfo);

myPageRouter.get("/reviews", authMiddleware.checkToken, myPageController.getMyPageReviewsInfo);

myPageRouter.post(
  "/reviews",
  authMiddleware.checkToken,
  uploadReviewImages,
  myPageController.myPageWriteReview,
);

myPageRouter.get(
  "/ordered-products-without-review",
  authMiddleware.checkToken,
  myPageController.getMyPageOrderProductsWithoutReviewInfo,
);

myPageRouter.get(
  "/orders/:orderNumber",
  authMiddleware.checkToken,
  myPageController.getMyPageOrderDetail,
);

myPageRouter.post(
  "/confirm-user",
  authMiddleware.checkToken,
  validationMiddleware(ConfirmUserDto),
  myPageController.myPageConfirmUser,
);

export default myPageRouter;
