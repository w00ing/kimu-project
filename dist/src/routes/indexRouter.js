"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var categoryRouter_1 = __importDefault(require("./categoryRouter"));
var myPageRouter_1 = __importDefault(require("./myPageRouter"));
var productRouter_1 = __importDefault(require("./productRouter"));
var usersRouter_1 = __importDefault(require("./usersRouter"));
var indexRouter = express_1.default.Router();
indexRouter.use("/users", usersRouter_1.default);
indexRouter.use("/products", productRouter_1.default);
indexRouter.use("/categories", categoryRouter_1.default);
indexRouter.use("/mypage", myPageRouter_1.default);
exports.default = indexRouter;
//# sourceMappingURL=indexRouter.js.map