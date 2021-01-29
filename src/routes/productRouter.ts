import express from "express";
import { ProductController } from "src/controllers/ProductController";
const productRouter = express.Router();
const productController = new ProductController();

productRouter.get("/", productController.getAllProducts);

export default productRouter;
