import express from "express";
import categoryRouter from "./categoryRouter";
import myPageRouter from "./myPageRouter";
import productRouter from "./productRouter";
import usersRouter from "./usersRouter";

const indexRouter = express.Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/products", productRouter);
indexRouter.use("/categories", categoryRouter);
indexRouter.use("/mypage", myPageRouter);

export default indexRouter;
