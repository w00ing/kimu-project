import express from "express";
import categoryRouter from "./categoryRouter";
import myPageRouter from "./myPageRouter";
import productRouter from "./productRouter";
import socialIssueRouter from "./socialIssueRouter";
import usersRouter from "./usersRouter";

const indexRouter = express.Router();

indexRouter.use("/users", usersRouter);
indexRouter.use("/products", productRouter);
indexRouter.use("/categories", categoryRouter);
indexRouter.use("/mypage", myPageRouter);
indexRouter.use("/social-issues", socialIssueRouter);

export default indexRouter;
