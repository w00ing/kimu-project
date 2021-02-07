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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BaseController_1 = require("./BaseController");
var logging_1 = __importDefault(require("../config/logging"));
var responseMessage_1 = __importDefault(require("../modules/responseMessage"));
var InternalServerException_1 = __importDefault(require("../exceptions/InternalServerException"));
var ConflictException_1 = __importDefault(require("../exceptions/ConflictException"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var JwtModule_1 = __importDefault(require("../modules/JwtModule"));
var WrongCredentialsException_1 = __importDefault(require("../exceptions/WrongCredentialsException"));
var NoSuchDataException_1 = __importDefault(require("src/exceptions/NoSuchDataException"));
var User_1 = require("src/entity/User");
var UsersController = /** @class */ (function (_super) {
    __extends(UsersController, _super);
    function UsersController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NAMESPACE = "Users Controller";
        _this.jwt = new JwtModule_1.default();
        // TODO: 전화번호 인증
        // Create User
        _this.createUser = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var createUserDto, socialIssueNames, userData, socialIssues, alreadyUser, hashedPassword, user, tokenData, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Create a user");
                        createUserDto = req.body;
                        socialIssueNames = createUserDto.socialIssueNames, userData = __rest(createUserDto, ["socialIssueNames"]);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.getSocialIssues(socialIssueNames)];
                    case 2:
                        socialIssues = _a.sent();
                        if (!socialIssues) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_SUCH_SOCIAL_ISSUE))];
                        }
                        return [4 /*yield*/, this.findByEmail(userData.email)];
                    case 3:
                        alreadyUser = _a.sent();
                        if (alreadyUser) {
                            return [2 /*return*/, next(new ConflictException_1.default(responseMessage_1.default.ALREADY_USER))];
                        }
                        return [4 /*yield*/, bcrypt_1.default.hash(userData.password, 10)];
                    case 4:
                        hashedPassword = _a.sent();
                        user = this.userRepo.create(__assign(__assign({}, userData), { socialIssues: socialIssues, password: hashedPassword }));
                        console.log("user", user);
                        return [4 /*yield*/, this.userRepo.save(user)];
                    case 5:
                        _a.sent();
                        user.password = undefined;
                        tokenData = this.jwt.createToken(user);
                        res.setHeader("Set-Cookie", [this.createCookieWithJwtToken(tokenData)]);
                        this.OK(res, responseMessage_1.default.CREATE_USER_SUCCESS, user);
                        return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        console.log(e_1);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        // Login
        // TODO: Make login with hashed version temporarily. Remove on production
        _this.login = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var userData, user, isPasswordMatching, tokenData, e_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Login");
                        userData = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.findByEmail(userData.email, true)];
                    case 2:
                        user = _a.sent();
                        console.log(user);
                        if (!user) {
                            return [2 /*return*/, next(new WrongCredentialsException_1.default())];
                        }
                        isPasswordMatching = userData.password === user.password;
                        console.log(userData.password);
                        console.log(user.password);
                        if (isPasswordMatching) {
                            user.password = undefined;
                            tokenData = this.jwt.createToken(user);
                            console.log(tokenData.expiresIn);
                            res.setHeader("Set-Cookie", [this.createCookieWithJwtToken(tokenData)]);
                            this.OK(res, responseMessage_1.default.LOGIN_SUCCESS, user);
                        }
                        else {
                            return [2 /*return*/, next(new WrongCredentialsException_1.default())];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        e_2 = _a.sent();
                        console.log(e_2);
                        next(new WrongCredentialsException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // Logout
        _this.logout = function (req, res, next) {
            logging_1.default.info(_this.NAMESPACE, "Logout");
            res.setHeader("Set-Cookie", [_this.getCookieForLogOut()]);
            _this.OK(res, responseMessage_1.default.LOGOUT_SUCCESS);
        };
        // Get All Users
        _this.getAllUsers = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var users, e_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get all users");
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.userRepo.find()];
                    case 2:
                        users = _a.sent();
                        this.OK(res, responseMessage_1.default.GET_ALL_USERS_SUCCESS, users);
                        return [3 /*break*/, 4];
                    case 3:
                        e_3 = _a.sent();
                        console.log(e_3);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        }); };
        // Update Password
        _this.updateUserPassword = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, passwordData, hashedPassword, e_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Change password");
                        user = req.user;
                        passwordData = req.body;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, bcrypt_1.default.hash(passwordData.password, 10)];
                    case 2:
                        hashedPassword = _a.sent();
                        return [4 /*yield*/, this.userRepo.update(user.id, { password: hashedPassword })];
                    case 3:
                        _a.sent();
                        user.password = undefined;
                        this.OK(res, responseMessage_1.default.UPDATE_USER_PASSWORD_SUCCESS, user);
                        return [3 /*break*/, 5];
                    case 4:
                        e_4 = _a.sent();
                        console.log(e_4);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        }); };
        // Update User Info
        _this.updateUserInfo = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var user, updateUserInfoDto, socialIssueNames, updateData, socialIssues, updatedUser, e_5;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Change User Info");
                        user = req.user;
                        updateUserInfoDto = req.body;
                        socialIssueNames = updateUserInfoDto.socialIssueNames, updateData = __rest(updateUserInfoDto, ["socialIssueNames"]);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.getSocialIssues(socialIssueNames)];
                    case 2:
                        socialIssues = _a.sent();
                        if (!socialIssues) {
                            return [2 /*return*/, next(new NoSuchDataException_1.default(responseMessage_1.default.NO_SUCH_SOCIAL_ISSUE))];
                        }
                        return [4 /*yield*/, this.userRepo
                                .createQueryBuilder()
                                .update(User_1.User)
                                .set(updateData)
                                .where("id = :userId", { userId: user.id })
                                .execute()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.userRepo.findOne(user.id)];
                    case 4:
                        updatedUser = _a.sent();
                        updatedUser.socialIssues = socialIssues;
                        return [4 /*yield*/, this.userRepo.save(updatedUser)];
                    case 5:
                        _a.sent();
                        this.OK(res, responseMessage_1.default.UPDATE_USER_INFO_SUCCESS, updatedUser);
                        return [3 /*break*/, 7];
                    case 6:
                        e_5 = _a.sent();
                        console.log(e_5);
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
        _this.findByEmail = function (email, password) {
            if (password === void 0) { password = false; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!password) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.userRepo
                                    .createQueryBuilder("user")
                                    .where("user.email = :email", { email: email })
                                    .addSelect("user.password")
                                    .getOne()];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [4 /*yield*/, this.userRepo.findOne({ email: email })];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return _this;
    }
    // Methods below will be used only inside of this Class
    UsersController.prototype.createCookieWithJwtToken = function (tokenData) {
        return "Authorization=" + tokenData.accessToken + "; HttpOnly; Path=/; Max-Age=" + tokenData.expiresIn;
    };
    UsersController.prototype.getCookieForLogOut = function () {
        return "Authorization=; HttpOnly; Path=/; Max-age=0";
    };
    UsersController.prototype.getSocialIssues = function (socialIssueNames) {
        return __awaiter(this, void 0, void 0, function () {
            var socialIssues, i, socialIssue, e_6;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        socialIssues = [];
                        i = 0;
                        _a.label = 1;
                    case 1:
                        if (!(i < socialIssueNames.length)) return [3 /*break*/, 6];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.socialIssueRepo.findOneOrFail({
                                where: { name: socialIssueNames[i] },
                            })];
                    case 3:
                        socialIssue = _a.sent();
                        socialIssues.push(socialIssue);
                        return [3 /*break*/, 5];
                    case 4:
                        e_6 = _a.sent();
                        console.log(e_6);
                        return [2 /*return*/, false];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6: return [2 /*return*/, socialIssues];
                }
            });
        });
    };
    return UsersController;
}(BaseController_1.BaseController));
exports.default = UsersController;
//# sourceMappingURL=usersController.js.map