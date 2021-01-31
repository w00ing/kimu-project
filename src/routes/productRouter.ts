import express from "express";
import { ProductController } from "src/controllers/ProductController";
const productRouter = express.Router();
const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);

productRouter.get("/subcategory/:subcategoryId", productController.getSubcategoryProducts);

export default productRouter;
