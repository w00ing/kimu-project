"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var responseMessage_1 = __importDefault(require("../modules/responseMessage"));
var statusCode_1 = __importDefault(require("../modules/statusCode"));
var HttpException_1 = __importDefault(require("./HttpException"));
var InternalServerException = /** @class */ (function (_super) {
    __extends(InternalServerException, _super);
    function InternalServerException() {
        return _super.call(this, statusCode_1.default.INTERNAL_SERVER_ERROR, responseMessage_1.default.INTERNAL_SERVER_ERROR) || this;
    }
    return InternalServerException;
}(HttpException_1.default));
exports.default = InternalServerException;
//# sourceMappingURL=InternalServerException.js.map