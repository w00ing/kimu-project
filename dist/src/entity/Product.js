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
exports.Product = void 0;
var typeorm_1 = require("typeorm");
var Cart_1 = require("./Cart");
var OrderProduct_1 = require("./OrderProduct");
var ProductClassification_1 = require("./ProductClassification");
var ProductOption_1 = require("./ProductOption");
var Review_1 = require("./Review");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Product.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Product.prototype, "price", void 0);
    __decorate([
        typeorm_1.Column({ type: "simple-array", nullable: true }),
        __metadata("design:type", Array)
    ], Product.prototype, "productImages", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "isDiscounted", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], Product.prototype, "discountAmount", void 0);
    __decorate([
        typeorm_1.Column({ type: "datetime", nullable: true }),
        __metadata("design:type", Date)
    ], Product.prototype, "discountStartDateTime", void 0);
    __decorate([
        typeorm_1.Column({ type: "datetime", nullable: true }),
        __metadata("design:type", Date)
    ], Product.prototype, "discountEndDateTime", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return ProductClassification_1.Category; }, function (category) { return category.products; }),
        __metadata("design:type", ProductClassification_1.Category)
    ], Product.prototype, "category", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return ProductClassification_1.Subcategory; }, function (subcategory) { return subcategory.products; }),
        __metadata("design:type", ProductClassification_1.Subcategory)
    ], Product.prototype, "subcategory", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return ProductClassification_1.Topic; }, function (topic) { return topic.products; }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], Product.prototype, "topics", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], Product.prototype, "shippingCost", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Product.prototype, "group", void 0);
    __decorate([
        typeorm_1.Column({ default: true }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "isAvailable", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], Product.prototype, "quantityAvailable", void 0);
    __decorate([
        typeorm_1.Column({ default: true }),
        __metadata("design:type", Boolean)
    ], Product.prototype, "isTaxed", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return ProductOption_1.ProductOption; }, function (productOption) { return productOption.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "productOptions", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Cart_1.Cart; }, function (cart) { return cart.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "carts", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Review_1.Review; }, function (review) { return review.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "reviews", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return OrderProduct_1.OrderProduct; }, function (orderProduct) { return orderProduct.product; }),
        __metadata("design:type", Array)
    ], Product.prototype, "orderProducts", void 0);
    Product = __decorate([
        typeorm_1.Entity()
    ], Product);
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=Product.js.map