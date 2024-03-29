import express from "express";
import {
  CreateUserDto,
  UpdateUserInfoDto,
  UpdateUserPasswordDto,
  UpdateUserSocialIssuesDto,
} from "src/dto/userDto";
import AuthMiddleware from "src/middlewares/AuthMiddleware";
import validationMiddleware from "src/middlewares/validationMiddleware";
import UsersController from "./../controllers/UsersController";

const usersController = new UsersController();
const authMiddleware = new AuthMiddleware();
const usersRouter = express.Router();

// Create User
usersRouter.post(
  "/",
  validationMiddleware(CreateUserDto),
  usersController.createUser,
);

// Login
usersRouter.post("/login", usersController.login);

// Logout
usersRouter.post("/logout", usersController.logout);

// Update User Info
usersRouter.put(
  "/user-info",
  validationMiddleware(UpdateUserInfoDto, true),
  authMiddleware.checkToken,
  usersController.updateUserInfo,
);

// Update Password
usersRouter.put(
  "/password",
  validationMiddleware(UpdateUserPasswordDto),
  authMiddleware.checkToken,
  usersController.updateUserPassword,
);

// Check duplicate user
usersRouter.post("/check-duplicate", usersController.checkDuplicateUser);

// Get All Users
usersRouter.get("/", usersController.getAllUsers);

// Delete User
usersRouter.get("/");

export default usersRouter;
