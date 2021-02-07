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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryController = void 0;
var logging_1 = __importDefault(require("src/config/logging"));
var InternalServerException_1 = __importDefault(require("src/exceptions/InternalServerException"));
var responseMessage_1 = __importDefault(require("src/modules/responseMessage"));
var BaseController_1 = require("./BaseController");
var CategoryController = /** @class */ (function (_super) {
    __extends(CategoryController, _super);
    function CategoryController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.NAMESPACE = "Categorys Controller";
        _this.getAllCategories = function (req, res, next) { return __awaiter(_this, void 0, void 0, function () {
            var categories, _i, categories_1, category, _a, _b, subcategory, cnt, e_1;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        logging_1.default.info(this.NAMESPACE, "Get all categories");
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 9, , 10]);
                        return [4 /*yield*/, this.categoryRepo
                                .createQueryBuilder("category")
                                .leftJoin("category.subcategories", "subcategories")
                                .select(["category.id", "category.name", "subcategories.id", "subcategories.name"])
                                .getMany()];
                    case 2:
                        categories = _c.sent();
                        _i = 0, categories_1 = categories;
                        _c.label = 3;
                    case 3:
                        if (!(_i < categories_1.length)) return [3 /*break*/, 8];
                        category = categories_1[_i];
                        _a = 0, _b = category.subcategories;
                        _c.label = 4;
                    case 4:
                        if (!(_a < _b.length)) return [3 /*break*/, 7];
                        subcategory = _b[_a];
                        return [4 /*yield*/, this.productRepo
                                .createQueryBuilder("product")
                                .where("product.subcategory.id = :subcategoryId", {
                                subcategoryId: subcategory.id,
                            })
                                .select("COUNT(1)", "cnt")
                                .getRawOne()];
                    case 5:
                        cnt = (_c.sent()).cnt;
                        subcategory.productCount = +cnt;
                        _c.label = 6;
                    case 6:
                        _a++;
                        return [3 /*break*/, 4];
                    case 7:
                        _i++;
                        return [3 /*break*/, 3];
                    case 8:
                        this.OK(res, responseMessage_1.default.GET_ALL_CATEGORIES_SUCCESS, categories);
                        return [3 /*break*/, 10];
                    case 9:
                        e_1 = _c.sent();
                        next(new InternalServerException_1.default());
                        return [3 /*break*/, 10];
                    case 10: return [2 /*return*/];
                }
            });
        }); };
        return _this;
    }
    return CategoryController;
}(BaseController_1.BaseController));
exports.CategoryController = CategoryController;
//# sourceMappingURL=CategoryController.js.map