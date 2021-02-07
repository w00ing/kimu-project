"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var CategoryController_1 = require("src/controllers/CategoryController");
var categoryRouter = express_1.default.Router();
var categoryController = new CategoryController_1.CategoryController();
categoryRouter.get("/", categoryController.getAllCategories);
exports.default = categoryRouter;
//# sourceMappingURL=categoryRouter.js.map