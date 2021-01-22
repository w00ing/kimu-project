import express from "express";
import UsersController from "./../controllers/usersController";

const usersController = new UsersController();
const usersRouter = express.Router();

// Create User
usersRouter.post("/", usersController.createUser);

// Login
usersRouter.post("/login", usersController.login);

// Logout
usersRouter.post("/logout", usersController.logout);

// Get All Users
usersRouter.get("/", usersController.getAllUsers);

// Get User Profile by Email
usersRouter.get("/");

// Update User
usersRouter.get("/");

// Delete User
usersRouter.get("/");

export default usersRouter;
