"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cart = void 0;
var typeorm_1 = require("typeorm");
var Product_1 = require("./Product");
var User_1 = require("./User");
var Cart = /** @class */ (function () {
    function Cart() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Cart.prototype, "userId", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Cart.prototype, "productId", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.carts; }),
        __metadata("design:type", User_1.User)
    ], Cart.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.Product; }, function (product) { return product.carts; }),
        __metadata("design:type", Product_1.Product)
    ], Cart.prototype, "product", void 0);
    Cart = __decorate([
        typeorm_1.Entity()
    ], Cart);
    return Cart;
}());
exports.Cart = Cart;
//# sourceMappingURL=Cart.js.map