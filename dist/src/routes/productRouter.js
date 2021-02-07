"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var ProductController_1 = require("src/controllers/ProductController");
var productRouter = express_1.default.Router();
var productController = new ProductController_1.ProductController();
productRouter.get("/", productController.getAllProducts);
productRouter.get("/best", productController.getBestProducts);
productRouter.get("/search", productController.searchProducts);
productRouter.get("/:productId", productController.getProductDetail);
productRouter.get("/:productId/bundle", productController.getBundleProducts);
productRouter.get("/:productId/reviews", productController.getProductReviews);
productRouter.get("/category/:categoryId", productController.getCategoryProducts);
productRouter.get("/subcategory/:subcategoryId", productController.getSubcategoryProducts);
exports.default = productRouter;
//# sourceMappingURL=productRouter.js.map