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
exports.Coupon = void 0;
var typeorm_1 = require("typeorm");
var Issuedcoupon_1 = require("./Issuedcoupon");
var Coupon = /** @class */ (function () {
    function Coupon() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn(),
        __metadata("design:type", Number)
    ], Coupon.prototype, "id", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Coupon.prototype, "name", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Coupon.prototype, "target", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Coupon.prototype, "content", void 0);
    __decorate([
        typeorm_1.Column(),
        typeorm_1.Generated("uuid"),
        __metadata("design:type", String)
    ], Coupon.prototype, "code", void 0);
    __decorate([
        typeorm_1.Column({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Coupon.prototype, "expirationDate", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", Number)
    ], Coupon.prototype, "discountAmount", void 0);
    __decorate([
        typeorm_1.Column({ nullable: true }),
        __metadata("design:type", String)
    ], Coupon.prototype, "discountRate", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", Number)
    ], Coupon.prototype, "minimumOrderAmount", void 0);
    __decorate([
        typeorm_1.OneToMany(function (type) { return Issuedcoupon_1.Issuedcoupon; }, function (issuedcoupon) { return issuedcoupon.coupon; }),
        __metadata("design:type", Array)
    ], Coupon.prototype, "issuedcoupons", void 0);
    Coupon = __decorate([
        typeorm_1.Entity()
    ], Coupon);
    return Coupon;
}());
exports.Coupon = Coupon;
//# sourceMappingURL=Coupon.js.map