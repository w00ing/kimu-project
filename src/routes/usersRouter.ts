import express from "express";
import UsersController from "./../controllers/usersController";

const usersController = new UsersController();
const usersRouter = express.Router();

// Create User
usersRouter.post("/");

// Get All Users
usersRouter.get("/", usersController.getAllUsers);

// Get User by Email
usersRouter.get("/");

// Update User
usersRouter.get("/");

// Delete User
usersRouter.get("/");

export default usersRouter;
