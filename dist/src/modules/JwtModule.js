"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var JwtModule = /** @class */ (function () {
    function JwtModule() {
        var _this = this;
        this.secretKey = process.env.JWT_SECRET;
        this.options = {
            // algorithm: "HS256",
            expiresIn: process.env.JWT_EXPIRATION,
            issuer: process.env.JWT_ISSUER,
        };
        this.TOKEN_EXPIRED = -3;
        this.TOKEN_INVALID = -2;
        this.createToken = function (user) {
            var payload = {
                id: user.id,
                email: user.email,
                name: user.name,
            };
            var result = {
                expiresIn: Number(_this.options.expiresIn.slice(0, -1)) * 86400,
                accessToken: jsonwebtoken_1.default.sign(payload, _this.secretKey, _this.options),
            };
            return result;
        };
        this.verify = function (token) {
            var decoded;
            try {
                decoded = jsonwebtoken_1.default.verify(token, _this.secretKey);
            }
            catch (err) {
                if (err.message === "jwt expired") {
                    console.log("expired token");
                    return _this.TOKEN_EXPIRED;
                }
                else if (err.message === "invalid token") {
                    console.log("invalid token");
                    console.log(_this.TOKEN_INVALID);
                    return _this.TOKEN_INVALID;
                }
                else {
                    console.log("invalid token");
                    return _this.TOKEN_INVALID;
                }
            }
            return decoded;
        };
    }
    return JwtModule;
}());
exports.default = JwtModule;
//# sourceMappingURL=JwtModule.js.map