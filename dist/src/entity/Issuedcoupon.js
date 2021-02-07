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
exports.Issuedcoupon = void 0;
var typeorm_1 = require("typeorm");
var Coupon_1 = require("./Coupon");
var User_1 = require("./User");
var Issuedcoupon = /** @class */ (function () {
    function Issuedcoupon() {
    }
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Issuedcoupon.prototype, "couponId", void 0);
    __decorate([
        typeorm_1.PrimaryColumn(),
        __metadata("design:type", Number)
    ], Issuedcoupon.prototype, "userId", void 0);
    __decorate([
        typeorm_1.Column(),
        __metadata("design:type", String)
    ], Issuedcoupon.prototype, "code", void 0);
    __decorate([
        typeorm_1.CreateDateColumn(),
        __metadata("design:type", Date)
    ], Issuedcoupon.prototype, "issuedDate", void 0);
    __decorate([
        typeorm_1.Column({ type: "datetime" }),
        __metadata("design:type", Date)
    ], Issuedcoupon.prototype, "expirationDate", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return User_1.User; }, function (user) { return user.issuedcoupons; }),
        __metadata("design:type", User_1.User)
    ], Issuedcoupon.prototype, "user", void 0);
    __decorate([
        typeorm_1.ManyToOne(function (type) { return Coupon_1.Coupon; }, function (coupon) { return coupon.issuedcoupons; }),
        __metadata("design:type", Coupon_1.Coupon)
    ], Issuedcoupon.prototype, "coupon", void 0);
    Issuedcoupon = __decorate([
        typeorm_1.Entity()
    ], Issuedcoupon);
    return Issuedcoupon;
}());
exports.Issuedcoupon = Issuedcoupon;
//# sourceMappingURL=Issuedcoupon.js.map