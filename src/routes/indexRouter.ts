import express from "express";
import categoryRouter from "./categoryRouter";
import productRouter from "./productRouter";
import usersRouter from "./usersRouter";

const indexRouter = express.Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/products", productRouter);
indexRouter.use("/categories", categoryRouter);

export default indexRouter;
