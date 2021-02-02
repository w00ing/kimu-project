import express from "express";
import { ProductController } from "src/controllers/ProductController";
const productRouter = express.Router();
const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);

productRouter.get("/best", productController.getBestProducts);

productRouter.get("/:productId", productController.getProductDetail);

productRouter.get("/:productId/bundle", productController.getBundleProducts);

productRouter.get("/:productId/reviews", productController.getProductReviews);

productRouter.get("/subcategory/:subcategoryId", productController.getSubcategoryProducts);

export default productRouter;
