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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var faker_1 = __importDefault(require("faker"));
var Order_1 = require("src/entity/Order");
var OrderProduct_1 = require("src/entity/OrderProduct");
var Product_1 = require("src/entity/Product");
var ProductOption_1 = require("src/entity/ProductOption");
var User_1 = require("src/entity/User");
var helperFunctions_1 = require("src/utils/helperFunctions");
var typeorm_1 = require("typeorm");
var CreateOrders = /** @class */ (function () {
    function CreateOrders() {
    }
    CreateOrders.prototype.run = function (factory, connection) {
        return __awaiter(this, void 0, void 0, function () {
            var userRepo, productRepo, orderRepo, orderProductRepo, productOptionsRepo, users, products, i, user, numberOfProducts, selectedProducts, order, _i, selectedProducts_1, product, productOptions, selectedOption, selectedOptionChoice, alreadyOrderProduct;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        userRepo = typeorm_1.getRepository(User_1.User);
                        productRepo = typeorm_1.getRepository(Product_1.Product);
                        orderRepo = typeorm_1.getRepository(Order_1.Order);
                        orderProductRepo = typeorm_1.getRepository(OrderProduct_1.OrderProduct);
                        productOptionsRepo = typeorm_1.getRepository(ProductOption_1.ProductOption);
                        return [4 /*yield*/, userRepo.find()];
                    case 1:
                        users = _a.sent();
                        return [4 /*yield*/, productRepo.find()];
                    case 2:
                        products = _a.sent();
                        i = 0;
                        _a.label = 3;
                    case 3:
                        if (!(i < 250)) return [3 /*break*/, 12];
                        user = faker_1.default.random.arrayElement(users);
                        numberOfProducts = Math.ceil(Math.random() * 5);
                        selectedProducts = helperFunctions_1.getRandom(products, numberOfProducts);
                        return [4 /*yield*/, factory(Order_1.Order)().create({ user: user })];
                    case 4:
                        order = _a.sent();
                        _i = 0, selectedProducts_1 = selectedProducts;
                        _a.label = 5;
                    case 5:
                        if (!(_i < selectedProducts_1.length)) return [3 /*break*/, 11];
                        product = selectedProducts_1[_i];
                        return [4 /*yield*/, productOptionsRepo.find({
                                where: { product: product },
                                relations: ["optionChoices"],
                            })];
                    case 6:
                        productOptions = _a.sent();
                        selectedOption = faker_1.default.random.arrayElement(productOptions);
                        selectedOptionChoice = faker_1.default.random.arrayElement(selectedOption.optionChoices);
                        return [4 /*yield*/, orderProductRepo.findOne({
                                orderId: order.id,
                                product: product,
                            })];
                    case 7:
                        alreadyOrderProduct = _a.sent();
                        if (alreadyOrderProduct) {
                            return [3 /*break*/, 10];
                        }
                        return [4 /*yield*/, factory(OrderProduct_1.OrderProduct)().create({
                                order: order,
                                product: product,
                                orderProductOption: selectedOptionChoice.name,
                            })];
                    case 8:
                        _a.sent();
                        order.shippingCost += product.shippingCost;
                        order.totalCost += product.price;
                        return [4 /*yield*/, orderRepo.save(order)];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10:
                        _i++;
                        return [3 /*break*/, 5];
                    case 11:
                        i++;
                        return [3 /*break*/, 3];
                    case 12: return [2 /*return*/];
                }
            });
        });
    };
    return CreateOrders;
}());
exports.default = CreateOrders;
//# sourceMappingURL=08_createOrdersSeed.js.map