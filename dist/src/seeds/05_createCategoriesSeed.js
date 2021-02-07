"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var ProductClassification_1 = require("src/entity/ProductClassification");
var CreateCategories = /** @class */ (function () {
    function CreateCategories() {
    }
    CreateCategories.prototype.run = function (factory, connection) {
        return __awaiter(this, void 0, void 0, function () {
            var categoryRepo, categoryNames, _i, categoryNames_1, category, subcategoryNames_01, category_01, _a, subcategoryNames_01_1, subcategory_01, subcategoryNames_02, category_02, _b, subcategoryNames_02_1, subcategory_02;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        categoryRepo = typeorm_1.getRepository(ProductClassification_1.Category);
                        categoryNames = ["아트워크", "굿즈"];
                        _i = 0, categoryNames_1 = categoryNames;
                        _c.label = 1;
                    case 1:
                        if (!(_i < categoryNames_1.length)) return [3 /*break*/, 4];
                        category = categoryNames_1[_i];
                        return [4 /*yield*/, factory(ProductClassification_1.Category)().create({ name: category })];
                    case 2:
                        _c.sent();
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        subcategoryNames_01 = ["아트시그니처", "아트포스터", "미니아트시그니처"];
                        return [4 /*yield*/, categoryRepo.findOne({ name: "아트워크" })];
                    case 5:
                        category_01 = _c.sent();
                        _a = 0, subcategoryNames_01_1 = subcategoryNames_01;
                        _c.label = 6;
                    case 6:
                        if (!(_a < subcategoryNames_01_1.length)) return [3 /*break*/, 9];
                        subcategory_01 = subcategoryNames_01_1[_a];
                        return [4 /*yield*/, factory(ProductClassification_1.Subcategory)().create({ name: subcategory_01, category: category_01 })];
                    case 7:
                        _c.sent();
                        _c.label = 8;
                    case 8:
                        _a++;
                        return [3 /*break*/, 6];
                    case 9:
                        subcategoryNames_02 = [
                            "콜라보레이션 굿즈",
                            "컬러링",
                            "폰케이스",
                            "노트",
                            "포스트카드",
                            "키톡",
                            "뱃지",
                        ];
                        return [4 /*yield*/, categoryRepo.findOne({ name: "굿즈" })];
                    case 10:
                        category_02 = _c.sent();
                        _b = 0, subcategoryNames_02_1 = subcategoryNames_02;
                        _c.label = 11;
                    case 11:
                        if (!(_b < subcategoryNames_02_1.length)) return [3 /*break*/, 14];
                        subcategory_02 = subcategoryNames_02_1[_b];
                        return [4 /*yield*/, factory(ProductClassification_1.Subcategory)().create({ name: subcategory_02, category: category_02 })];
                    case 12:
                        _c.sent();
                        _c.label = 13;
                    case 13:
                        _b++;
                        return [3 /*break*/, 11];
                    case 14: return [2 /*return*/];
                }
            });
        });
    };
    return CreateCategories;
}());
exports.default = CreateCategories;
//# sourceMappingURL=05_createCategoriesSeed.js.map