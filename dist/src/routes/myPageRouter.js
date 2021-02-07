"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var MyPageController_1 = require("src/controllers/MyPageController");
var userDto_1 = require("src/dto/userDto");
var AuthMiddleware_1 = __importDefault(require("src/middlewares/AuthMiddleware"));
var multerMiddleware_1 = require("src/middlewares/multerMiddleware");
var validationMiddleware_1 = __importDefault(require("src/middlewares/validationMiddleware"));
var myPageRouter = express_1.default.Router();
var myPageController = new MyPageController_1.MyPageController();
var authMiddleware = new AuthMiddleware_1.default();
myPageRouter.get("/", authMiddleware.checkToken, myPageController.getMyPageInfo);
myPageRouter.get("/coupons", authMiddleware.checkToken, myPageController.getMyPageCouponsInfo);
myPageRouter.post("/coupons", authMiddleware.checkToken, myPageController.myPageIssueCoupon);
myPageRouter.get("/mileage", authMiddleware.checkToken, myPageController.getMyPageMileageInfo);
myPageRouter.get("/orders", authMiddleware.checkToken, myPageController.getMyPageOrdersInfo);
myPageRouter.get("/reviews", authMiddleware.checkToken, myPageController.getMyPageReviewsInfo);
myPageRouter.post("/reviews", authMiddleware.checkToken, multerMiddleware_1.uploadReviewImages, myPageController.myPageWriteReview);
myPageRouter.get("/ordered-products-without-review", authMiddleware.checkToken, myPageController.getMyPageOrderProductsWithoutReviewInfo);
myPageRouter.get("/orders/:orderNumber", authMiddleware.checkToken, myPageController.getMyPageOrderDetail);
myPageRouter.post("/confirm-user", authMiddleware.checkToken, validationMiddleware_1.default(userDto_1.ConfirmUserDto), myPageController.myPageConfirmUser);
exports.default = myPageRouter;
//# sourceMappingURL=myPageRouter.js.map