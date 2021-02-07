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
var AuthenticationTokenMissingException = /** @class */ (function (_super) {
    __extends(AuthenticationTokenMissingException, _super);
    function AuthenticationTokenMissingException() {
        return _super.call(this, statusCode_1.default.UNAUTHORIZED, responseMessage_1.default.EMPTY_TOKEN) || this;
    }
    return AuthenticationTokenMissingException;
}(HttpException_1.default));
exports.default = AuthenticationTokenMissingException;
//# sourceMappingURL=AuthenticationTokenMissingException.js.map