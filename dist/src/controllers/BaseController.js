"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseController = void 0;
var Cart_1 = require("src/entity/Cart");
var Coupon_1 = require("src/entity/Coupon");
var Issuedcoupon_1 = require("src/entity/Issuedcoupon");
var Order_1 = require("src/entity/Order");
var OrderProduct_1 = require("src/entity/OrderProduct");
var Product_1 = require("src/entity/Product");
var ProductClassification_1 = require("src/entity/ProductClassification");
var Review_1 = require("src/entity/Review");
var SocialIssue_1 = require("src/entity/SocialIssue");
var User_1 = require("src/entity/User");
var typeorm_1 = require("typeorm");
var statusCode_1 = __importDefault(require("../modules/statusCode"));
var util_1 = __importDefault(require("../modules/util"));
var BaseController = /** @class */ (function () {
    function BaseController() {
        this.userRepo = typeorm_1.getRepository(User_1.User);
        this.productRepo = typeorm_1.getRepository(Product_1.Product);
        this.categoryRepo = typeorm_1.getRepository(ProductClassification_1.Category);
        this.issuedcouponRepo = typeorm_1.getRepository(Issuedcoupon_1.Issuedcoupon);
        this.subcategoryRepo = typeorm_1.getRepository(ProductClassification_1.Subcategory);
        this.topicRepo = typeorm_1.getRepository(ProductClassification_1.Topic);
        this.orderRepo = typeorm_1.getRepository(Order_1.Order);
        this.orderProductRepo = typeorm_1.getRepository(OrderProduct_1.OrderProduct);
        this.cartRepo = typeorm_1.getRepository(Cart_1.Cart);
        this.couponRepo = typeorm_1.getRepository(Coupon_1.Coupon);
        this.reviewRepo = typeorm_1.getRepository(Review_1.Review);
        this.socialIssueRepo = typeorm_1.getRepository(SocialIssue_1.SocialIssue);
    }
    BaseController.prototype.OK = function (res, message, data) {
        res.type("application/json");
        return res.status(statusCode_1.default.OK).send(util_1.default.success(statusCode_1.default.OK, message, data));
    };
    return BaseController;
}());
exports.BaseController = BaseController;
//# sourceMappingURL=BaseController.js.map