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
exports.ProductController = void 0;
var logging_1 = __importDefault(require("src/config/logging"));
var InternalServerException_1 = __importDefault(require("src/exceptions/InternalServerException"));
var responseMessage_1 = __importDefault(require("src/modules/responseMessage"));
var BaseController_1 = require("./BaseController");
var NoSuchDataException_1 = __importDefault(require("src/exceptions/NoSuchDataException"));
var OrderProduct_1 = require("src/entity/OrderProduct");
var ProductController = /** @class */ (function (_super) {
    __extends(ProductController, _super);
    function ProductController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NAMESPACE = "Products Controller";
        _this.getAllProducts = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var _a, products, count, e_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get all posts");
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.productRepo.findAndCount()];
                    case 2:
                        _a = _b.sent(), products = _a[0], count = _a[1];
                        this.OK(res, responseMessage_1.default.GET_ALL_PRODUCTS_SUCCESS, { count: count, products: products });
                        return [3 /*break*/, 4];
                    case 3:
                        e_1 = _b.sent();
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getCategoryProducts = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var categoryId, _a, products, productCount, e_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        categoryId = req.params.categoryId;
                        console.log(categoryId);
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.productRepo
                                .createQueryBuilder("product")
                                .leftJoin("product.subcategory", "subcategory")
                                .leftJoin("product.topics", "topic")
                                .where("product.category.id = :categoryId", { categoryId: categoryId })
                                .andWhere("topic.isUsed = :isUsed", { isUsed: true })
                                .select([
                                "product.id",
                                "product.productImages",
                                "product.name",
                                "product.price",
                                "product.isDiscounted",
                                "product.discountAmount",
                                "subcategory.id",
                                "subcategory.name",
                                "topic.name",
                                "topic.id",
                            ])
                                .getManyAndCount()];
                    case 2:
                        _a = _b.sent(), products = _a[0], productCount = _a[1];
                        if (products.length === 0) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_SUCH_CATEGORY))];
                        }
                        this.OK(res, responseMessage_1.default.GET_PRODUCTS_WITH_GIVEN_CATEGORY_SUCCESS, {
                            productCount: productCount,
                            products: products,
                        });
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _b.sent();
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getSubcategoryProducts = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var subcategoryId, subcategory, products, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get All products with given subcategory");
                        subcategoryId = req.params.subcategoryId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.subcategoryRepo.findOne({
                                where: { id: subcategoryId },
                            })];
                    case 2:
                        subcategory = _a.sent();
                        if (!subcategory) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_SUCH_SUBCATEGORY))];
                        }
                        return [4 /*yield*/, this.productRepo
                                .createQueryBuilder("product")
                                .leftJoin("product.topics", "topic")
                                .where("product.subcategory.id = :subcategoryId", { subcategoryId: subcategoryId })
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
                                .getMany()];
                    case 3:
                        products = _a.sent();
                        this.OK(res, responseMessage_1.default.GET_PRODUCTS_WITH_GIVEN_SUBCATEGORY_SUCCESS, products);
                        return [3 /*break*/, 5];
                    case 4:
                        e_3 = _a.sent();
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        _this.getProductDetail = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var productId, product, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get product Info");
                        productId = req.params.productId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.productRepo.findOne({
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
                            })];
                    case 2:
                        product = _a.sent();
                        if (!product) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_SUCH_PRODUCT))];
                        }
                        this.OK(res, responseMessage_1.default.GET_PRODUCT_DETAIL_SUCCESS, product);
                        return [3 /*break*/, 4];
                    case 3:
                        e_4 = _a.sent();
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getBundleProducts = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var productId, group, products, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get Bundle Products");
                        productId = req.params.productId;
                        group = "a";
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.productRepo
                                .createQueryBuilder("product")
                                .where("product.id != :productId", { productId: productId })
                                .andWhere("product.group = :group", { group: group })
                                .select([
                                "product.id",
                                "product.productImages",
                                "product.name",
                                "product.price",
                                "product.isDiscounted",
                                "product.discountAmount",
                            ])
                                .getMany()];
                    case 2:
                        products = _a.sent();
                        this.OK(res, responseMessage_1.default.GET_BUNDLE_PRODUCTS_SUCCESS, products);
                        return [3 /*break*/, 4];
                    case 3:
                        e_5 = _a.sent();
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getProductReviews = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var productId, reviews, reviewCount, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get Product Reviews");
                        productId = req.params.productId;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.reviewRepo
                                .createQueryBuilder("review")
                                .leftJoin("review.user", "user")
                                .where("review.productId = :productId", { productId: productId })
                                .andWhere("review.isApproved = :isApproved", { isApproved: true })
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
                                .getMany()];
                    case 2:
                        reviews = _a.sent();
                        reviewCount = reviews.length;
                        this.OK(res, responseMessage_1.default.GET_PRODUCT_REVIEWS_SUCCESS, { reviewCount: reviewCount, reviews: reviews });
                        return [3 /*break*/, 4];
                    case 3:
                        e_6 = _a.sent();
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.getBestProducts = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var products, e_7;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get Best Products");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.productRepo
                                .createQueryBuilder("product")
                                .select([
                                "product.id",
                                "product.name",
                                "product.productImages",
                                "product.price",
                                "product.isDiscounted",
                                "product.discountAmount",
                            ])
                                .addSelect(function (subQuery) {
                                return subQuery
                                    .select("COUNT(*)")
                                    .from(OrderProduct_1.OrderProduct, "orderProduct")
                                    .where("orderProduct.productId=product.id");
                            }, "orderProductCount")
                                .orderBy("orderProductCount", "DESC")
                                .take(9)
                                .getMany()];
                    case 2:
                        products = _a.sent();
                        // console.log(products);
                        this.OK(res, responseMessage_1.default.GET_BEST_PRODUCTS_SUCCESS, products);
                        return [3 /*break*/, 4];
                    case 3:
                        e_7 = _a.sent();
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        _this.searchProducts = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var searchTerm, products, e_8;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Search Products");
                        searchTerm = req.query.searchTerm;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.productRepo
                                .createQueryBuilder("product")
                                .where("product.name like :searchTerm", { searchTerm: "%" + searchTerm + "%" })
                                .select([
                                "product.id",
                                "product.name",
                                "product.productImages",
                                "product.price",
                                "product.isDiscounted",
                                "product.discountAmount",
                            ])
                                .getMany()];
                    case 2:
                        products = _a.sent();
                        this.OK(res, responseMessage_1.default.SEARCH_PRODUCTS_SUCCESS, products);
                        return [3 /*break*/, 4];
                    case 3:
                        e_8 = _a.sent();
                        console.log(e_8);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    return ProductController;
}(BaseController_1.BaseController));
exports.ProductController = ProductController;
//# sourceMappingURL=ProductController.js.map