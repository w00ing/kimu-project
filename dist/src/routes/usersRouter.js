"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var userDto_1 = require("src/dto/userDto");
var AuthMiddleware_1 = __importDefault(require("src/middlewares/AuthMiddleware"));
var validationMiddleware_1 = __importDefault(require("src/middlewares/validationMiddleware"));
var usersController_1 = __importDefault(require("./../controllers/usersController"));
var usersController = new usersController_1.default();
var authMiddleware = new AuthMiddleware_1.default();
var usersRouter = express_1.default.Router();
// Create User
usersRouter.post("/", validationMiddleware_1.default(userDto_1.CreateUserDto), usersController.createUser);
// Login
usersRouter.post("/login", usersController.login);
// Logout
usersRouter.post("/logout", usersController.logout);
// Update User Info
usersRouter.put("/user-info", validationMiddleware_1.default(userDto_1.UpdateUserInfoDto, true), authMiddleware.checkToken, usersController.updateUserInfo);
// Update Password
usersRouter.put("/password", validationMiddleware_1.default(userDto_1.UpdateUserPasswordDto), authMiddleware.checkToken, usersController.updateUserPassword);
// Get All Users
usersRouter.get("/", usersController.getAllUsers);
// Delete User
usersRouter.get("/");
exports.default = usersRouter;
//# sourceMappingURL=usersRouter.js.map