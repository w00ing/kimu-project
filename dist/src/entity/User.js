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
exports.User = void 0;
var typeorm_1 = require("typeorm");
var SocialIssue_1 = require("./SocialIssue");
var Order_1 = require("./Order");
var Cart_1 = require("./Cart");
var Review_1 = require("./Review");
var Issuedcoupon_1 = require("./Issuedcoupon");
var User = /** @class */ (function () {
    function User() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], User.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ unique: true }),
        __metadata("design:type", String)
    ], User.prototype, "email", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "gender", void 0);
    __decorate([
        typeorm_1.Column({ type: "text", nullable: true }),
        __metadata("design:type", String)
    ], User.prototype, "address", void 0);
    __decorate([
        typeorm_1.Column({ select: false }),
        __metadata("design:type", String)
    ], User.prototype, "password", void 0);
    __decorate([
        typeorm_1.Column({ type: "date" }),
        __metadata("design:type", Date)
    ], User.prototype, "birthdate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], User.prototype, "phoneNumber", void 0);
    __decorate([
        typeorm_1.Column({ default: 0 }),
        __metadata("design:type", Number)
    ], User.prototype, "mileage", void 0);
    __decorate([
        typeorm_1.CreateDateColumn({ type: "timestamp" }),
        __metadata("design:type", Date)
    ], User.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.ManyToMany(function (type) { return SocialIssue_1.SocialIssue; }, function (socialIssue) { return socialIssue.user; }, { cascade: true }),
        typeorm_1.JoinTable(),
        __metadata("design:type", Array)
    ], User.prototype, "socialIssues", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Issuedcoupon_1.Issuedcoupon; }, function (issuedcoupon) { return issuedcoupon.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "issuedcoupons", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Review_1.Review; }, function (review) { return review.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "reviews", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Cart_1.Cart; }, function (cart) { return cart.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "carts", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Order_1.Order; }, function (order) { return order.user; }),
        __metadata("design:type", Array)
    ], User.prototype, "orders", void 0);
    User = __decorate([
        typeorm_1.Entity()
    ], User);
    return User;
}());
exports.User = User;
//# sourceMappingURL=User.js.map