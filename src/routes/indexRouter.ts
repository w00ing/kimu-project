import express from "express";
import usersRouter from "./usersRouter";

const indexRouter = express.Router();

indexRouter.use("/users", usersRouter);

export default indexRouter;
