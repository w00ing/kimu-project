"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var util_1 = __importDefault(require("../modules/util"));
var errorMiddleware = function (error, req, res, next) {
    var status = error.status || 500;
    var message = error.message || "Something went wrong";
    console.log("error");
    return res.status(status).json(util_1.default.fail(status, message));
};
exports.default = errorMiddleware;
//# sourceMappingURL=errorMiddleware.js.map