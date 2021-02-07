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
exports.Review = void 0;
var ColumnNumericTransformer_1 = require("src/transformers/ColumnNumericTransformer");
var typeorm_1 = require("typeorm");
var OrderProduct_1 = require("./OrderProduct");
var Product_1 = require("./Product");
var User_1 = require("./User");
var Review = /** @class */ (function () {
    function Review() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Review.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Review.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Review.prototype, "productId", void 0);
    __decorate([
        typeorm_1.Column({ type: "decimal", precision: 2, scale: 1, transformer: new ColumnNumericTransformer_1.ColumnNumericTransformer() }),
        __metadata("design:type", Number)
    ], Review.prototype, "stars", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Review.prototype, "content", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Review.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column({ default: false }),
        __metadata("design:type", Boolean)
    ], Review.prototype, "isApproved", void 0);
    __decorate([
        typeorm_1.Column({ type: "date", nullable: true }),
        __metadata("design:type", Date)
    ], Review.prototype, "approvedAt", void 0);
    __decorate([
        typeorm_1.Column("simple-array"),
        __metadata("design:type", Array)
    ], Review.prototype, "reviewImages", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Product_1.Product; }, function (product) { return product.reviews; }),
        __metadata("design:type", Product_1.Product)
    ], Review.prototype, "product", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.reviews; }),
        __metadata("design:type", User_1.User)
    ], Review.prototype, "user", void 0);
    __decorate([
        typeorm_1.OneToOne(function (type) { return OrderProduct_1.OrderProduct; }, function (orderProduct) { return orderProduct.review; }),
        typeorm_1.JoinColumn({ name: "orderProductId" }),
        __metadata("design:type", OrderProduct_1.OrderProduct)
    ], Review.prototype, "orderProduct", void 0);
    Review = __decorate([
        typeorm_1.Entity()
    ], Review);
    return Review;
}());
exports.Review = Review;
//# sourceMappingURL=Review.js.map