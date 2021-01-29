import express from "express";
import productRouter from "./productRouter";
import usersRouter from "./usersRouter";

const indexRouter = express.Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/products", productRouter);

export default indexRouter;
