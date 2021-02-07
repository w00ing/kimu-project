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
exports.OrderProduct = void 0;
var typeorm_1 = require("typeorm");
var Order_1 = require("./Order");
var Product_1 = require("./Product");
var Review_1 = require("./Review");
var OrderProduct = /** @class */ (function () {
    function OrderProduct() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], OrderProduct.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], OrderProduct.prototype, "productId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], OrderProduct.prototype, "orderId", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], OrderProduct.prototype, "didWriteReview", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], OrderProduct.prototype, "quantity", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Order_1.Order; }, function (order) { return order.orderProducts; }),
        __metadata("design:type", Order_1.Order)
    ], OrderProduct.prototype, "order", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.Product; }, function (product) { return product.orderProducts; }),
        __metadata("design:type", Product_1.Product)
    ], OrderProduct.prototype, "product", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], OrderProduct.prototype, "orderProductOption", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return Review_1.Review; }, function (review) { return review.orderProduct; }),
        __metadata("design:type", Review_1.Review)
    ], OrderProduct.prototype, "review", void 0);
    OrderProduct = __decorate([
        typeorm_1.Entity()
    ], OrderProduct);
    return OrderProduct;
}());
exports.OrderProduct = OrderProduct;
//# sourceMappingURL=OrderProduct.js.map