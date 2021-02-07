"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyPageController = void 0;
var InternalServerException_1 = __importDefault(require("src/exceptions/InternalServerException"));
var responseMessage_1 = __importDefault(require("src/modules/responseMessage"));
var BaseController_1 = require("./BaseController");
var logging_1 = __importDefault(require("../config/logging"));
var NoSuchDataException_1 = __importDefault(require("src/exceptions/NoSuchDataException"));
var ConflictException_1 = __importDefault(require("src/exceptions/ConflictException"));
var WrongCredentialsException_1 = __importDefault(require("src/exceptions/WrongCredentialsException"));
var MyPageController = /** @class */ (function (_super) {
    __extends(MyPageController, _super);
    function MyPageController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NAMESPACE = "MyPage Controller";
        _this.getMyPageInfo = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, username, mileage, issuedcouponCount, myPageInfo, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get Mypage Info");
                        user = req.user;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        username = user.name;
                        mileage = user.mileage;
                        return [4 /*yield*/, this.issuedcouponRepo
                                .createQueryBuilder("issuedcoupon")
                                .where("issuedcoupon.userId = :userId", { userId: user.id })
                                .getCount()];
                    case 2:
                        issuedcouponCount = _a.sent();
                        myPageInfo = { username: username, issuedcouponCount: issuedcouponCount, mileage: mileage };
                        this.OK(res, responseMessage_1.default.GET_MYPAGE_INFO_SUCCESS, myPageInfo);
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _a.sent();
                        console.log(e_1);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getMyPageCouponsInfo = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, issuedcoupons, issuedcouponsInfo, _i, issuedcoupons_1, ic, info, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get Mypage Coupons Info");
                        user = req.user;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.issuedcouponRepo
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
                                .getMany()];
                    case 2:
                        issuedcoupons = _a.sent();
                        if (issuedcoupons.length === 0) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_ISSUED_COUPONS))];
                        }
                        issuedcouponsInfo = [];
                        for (_i = 0, issuedcoupons_1 = issuedcoupons; _i < issuedcoupons_1.length; _i++) {
                            ic = issuedcoupons_1[_i];
                            info = {
                                name: ic.coupon.name,
                                discountAmount: ic.coupon.discountAmount,
                                discountRate: ic.coupon.discountRate,
                                minimumOrderAmount: ic.coupon.minimumOrderAmount,
                                issuedDate: ic.issuedDate,
                                expirationDate: ic.expirationDate,
                            };
                            issuedcouponsInfo.push(info);
                        }
                        this.OK(res, responseMessage_1.default.GET_MYPAGE_COUPONS_INFO_SUCCESS, issuedcouponsInfo);
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.log(e_2);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getMyPageMileageInfo = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, mileageInfo;
            return __generator(this, function (_a) {
                logging_1.default.info(this.NAMESPACE, "Get Mypage Mileage Info");
                user = req.user;
                try {
                    mileageInfo = user.mileage;
                    this.OK(res, responseMessage_1.default.GET_MYPAGE_MILEAGE_INFO_SUCCESS, mileageInfo);
                }
                catch (e) {
                    console.log(e);
                    next(new InternalServerException_1.default());
                }
                return [2 /*return*/];
            });
        }); };
        _this.getMyPageOrdersInfo = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, orders, ordersInfo, _i, orders_1, order, orderInfo, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get Mypage Orders Info");
                        user = req.user;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.orderRepo
                                .createQueryBuilder("order")
                                .where("order.userId = :userId", { userId: user.id })
                                .leftJoinAndSelect("order.orderProducts", "orderProduct")
                                .leftJoinAndSelect("orderProduct.product", "product")
                                .addSelect(["order.orderDateTime", "order.id", "product.productImages"])
                                .getMany()];
                    case 2:
                        orders = _a.sent();
                        if (!orders) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_ORDERS_OF_THIS_USER))];
                        }
                        ordersInfo = [];
                        for (_i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
                            order = orders_1[_i];
                            orderInfo = {
                                orderNumber: order.id,
                                orderDateTime: order.orderDateTime,
                                firstProductImage: order.orderProducts[0].product.productImages[0],
                                firstProductName: order.orderProducts[0].product.name,
                                totalCost: order.totalCost,
                            };
                            ordersInfo.push(orderInfo);
                        }
                        this.OK(res, responseMessage_1.default.GET_MYPAGE_ORDERS_INFO_SUCCESS, ordersInfo);
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getMyPageReviewsInfo = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, _a, reviews, reviewCount, reviewsInfo, _i, reviews_1, review, reviewInfo, e_4;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get Mypage Reviews Info");
                        user = req.user;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.reviewRepo
                                .createQueryBuilder("review")
                                .where("review.userId = :userId", { userId: user.id })
                                .andWhere("review.isApproved = :isApproved", { isApproved: true })
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
                                .getManyAndCount()];
                    case 2:
                        _a = _b.sent(), reviews = _a[0], reviewCount = _a[1];
                        if (!reviews) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_REVIEWS_OF_THIS_USER))];
                        }
                        reviewsInfo = [];
                        for (_i = 0, reviews_1 = reviews; _i < reviews_1.length; _i++) {
                            review = reviews_1[_i];
                            reviewInfo = {
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
                        this.OK(res, responseMessage_1.default.GET_MYPAGE_REVIEWS_INFO_SUCCESS, { reviewCount: reviewCount, reviewsInfo: reviewsInfo });
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _b.sent();
                        console.log(e_4);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getMyPageOrderProductsWithoutReviewInfo = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, _a, orderProductsWithoutReviews, productCount, orderProductsWithoutReviewsInfo, _i, orderProductsWithoutReviews_1, orderProduct, info, e_5;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get Mypage Order Products Without Reviews Info");
                        user = req.user;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.orderProductRepo
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
                                .getManyAndCount()];
                    case 2:
                        _a = _b.sent(), orderProductsWithoutReviews = _a[0], productCount = _a[1];
                        if (!orderProductsWithoutReviews) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_ORDERED_PRODUCTS_WITHOUT_REVIEW))];
                        }
                        orderProductsWithoutReviewsInfo = [];
                        for (_i = 0, orderProductsWithoutReviews_1 = orderProductsWithoutReviews; _i < orderProductsWithoutReviews_1.length; _i++) {
                            orderProduct = orderProductsWithoutReviews_1[_i];
                            info = {
                                productId: orderProduct.product.id,
                                productName: orderProduct.product.name,
                                productImage: orderProduct.product.productImages[0],
                                productOption: orderProduct.orderProductOption,
                                orderDateTime: orderProduct.order.orderDateTime,
                                orderProductId: orderProduct.id,
                            };
                            orderProductsWithoutReviewsInfo.push(info);
                        }
                        this.OK(res, responseMessage_1.default.GET_MYPAGE_ORDERPRODUCTS_WITHOUT_REVIEWS_SUCCESS, {
                            productCount: productCount,
                            orderProductsWithoutReviewsInfo: orderProductsWithoutReviewsInfo,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _b.sent();
                        console.log(e_5);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getMyPageOrderDetail = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var orderNumber, order, orderDetail, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get Mypage Order Detail");
                        orderNumber = req.params.orderNumber;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.orderRepo
                                .createQueryBuilder("order")
                                .where("order.id = :orderNumber", { orderNumber: orderNumber })
                                .leftJoinAndSelect("order.orderProducts", "orderProduct")
                                .leftJoinAndSelect("orderProduct.product", "product")
                                .getOne()];
                    case 2:
                        order = _a.sent();
                        if (!order) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_SUCH_ORDER))];
                        }
                        orderDetail = {
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
                            orderProducts: order.orderProducts.map(function (orderProduct) {
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
                        this.OK(res, responseMessage_1.default.GET_MYPAGE_ORDER_DETAIL_SUCCESS, orderDetail);
                        return [3 /*break*/, 4];
                    case 3:
                        e_6 = _a.sent();
                        console.log(e_6);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.myPageIssueCoupon = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, code, coupon, alreadyIssuedCoupon, issuedCoupon, issuedCouponInfo, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Issue a Coupon in Mypage");
                        user = req.user;
                        code = req.body.code;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.couponRepo.findOne({ code: code })];
                    case 2:
                        coupon = _a.sent();
                        if (!coupon) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_SUCH_COUPON))];
                        }
                        return [4 /*yield*/, this.issuedcouponRepo.findOne({ userId: user.id, code: code })];
                    case 3:
                        alreadyIssuedCoupon = _a.sent();
                        if (alreadyIssuedCoupon) {
                            return [2 /*return*/, next(new ConflictException_1.default(responseMessage_1.default.ALREADY_ISSUED_COUPON_FOR_THIS_USER))];
                        }
                        issuedCoupon = this.issuedcouponRepo.create({
                            couponId: coupon.id,
                            userId: user.id,
                            code: code,
                            expirationDate: coupon.expirationDate,
                        });
                        return [4 /*yield*/, this.issuedcouponRepo.save(issuedCoupon)];
                    case 4:
                        _a.sent();
                        issuedCouponInfo = {
                            code: code,
                            expirationDate: issuedCoupon.expirationDate,
                            issuedDate: issuedCoupon.issuedDate,
                        };
                        this.OK(res, responseMessage_1.default.MYPAGE_ISSUE_COUPON_SUCCESS, issuedCouponInfo);
                        return [3 /*break*/, 6];
                    case 5:
                        e_7 = _a.sent();
                        console.log(e_7);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 6];
                    case 6: return [2 /*return*/];
                }
            });
        }); };
        _this.myPageWriteReview = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, _a, stars, content, productId, orderProductId, imageUrls, alreadyReview, review, e_8;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        user = req.user;
                        _a = req.body, stars = _a.stars, content = _a.content, productId = _a.productId, orderProductId = _a.orderProductId;
                        imageUrls = req.files.map(function (file) { return file.location; });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.reviewRepo.findOne({ orderProduct: orderProductId })];
                    case 2:
                        alreadyReview = _b.sent();
                        if (alreadyReview) {
                            return [2 /*return*/, next(new ConflictException_1.default(responseMessage_1.default.ALREADY_REVIEW))];
                        }
                        review = this.reviewRepo.create({
                            userId: user.id,
                            stars: parseFloat(stars),
                            content: content,
                            productId: productId,
                            orderProduct: orderProductId,
                            reviewImages: imageUrls,
                        });
                        return [4 /*yield*/, this.userRepo.update(user.id, { mileage: user.mileage + 500 })];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.orderProductRepo.update({ id: orderProductId }, { didWriteReview: true })];
                    case 4:
                        _b.sent();
                        return [4 /*yield*/, this.reviewRepo.save(review)];
                    case 5:
                        _b.sent();
                        this.OK(res, responseMessage_1.default.MYPAGE_WRITE_REVIEW_SUCCESS, review);
                        return [3 /*break*/, 7];
                    case 6:
                        e_8 = _b.sent();
                        console.log(e_8);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        _this.myPageConfirmUser = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, _a, email, password, userToBeConfirmed, e_9;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        user = req.user;
                        _a = req.body, email = _a.email, password = _a.password;
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userRepo.findOne({ email: email, password: password })];
                    case 2:
                        userToBeConfirmed = _b.sent();
                        if (!userToBeConfirmed || user.id !== userToBeConfirmed.id) {
                            return [2 /*return*/, next(new WrongCredentialsException_1.default())];
                        }
                        this.OK(res, responseMessage_1.default.CONFIRM_USER_SUCCESS, user);
                        return [3 /*break*/, 4];
                    case 3:
                        e_9 = _b.sent();
                        console.log(e_9);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    return MyPageController;
}(BaseController_1.BaseController));
exports.MyPageController = MyPageController;
//# sourceMappingURL=MyPageController.js.map