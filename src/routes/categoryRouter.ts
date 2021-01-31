import express from "express";
import { CategoryController } from "src/controllers/CategoryController";
const categoryRouter = express.Router();
const categoryController = new CategoryController();

categoryRouter.get("/", categoryController.getAllCategories);

export default categoryRouter;
