"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Coupon_1 = require("../entity/Coupon");
var typeorm_1 = require("typeorm");
var typeorm_seeding_1 = require("typeorm-seeding");
typeorm_seeding_1.define(Coupon_1.Coupon, function (faker) {
    var couponRepo = typeorm_1.getRepository(Coupon_1.Coupon);
    var targets = ["첫구매 고객", "재구매 고객"];
    var discountOptions = ["amount", "rate"];
    var name = faker.random.word();
    var target = faker.random.arrayElement(targets);
    var content = faker.lorem.words(6);
    var discountOption = faker.random.arrayElement(discountOptions);
    var discountAmount = parseInt(faker.finance.amount(5000, 10000, 0));
    var discountRate = faker.finance.amount(10, 80, 0) + "%";
    var minimumOrderAmount = parseInt(faker.finance.amount(10000, 50000, 0));
    var expirationDate = faker.date.future();
    var coupon = couponRepo.create({
        name: name,
        target: target,
        content: content,
        discountAmount: discountOption === "amount" ? discountAmount : null,
        discountRate: discountOption === "rate" ? discountRate : null,
        minimumOrderAmount: minimumOrderAmount,
        expirationDate: expirationDate,
    });
    return coupon;
});
//# sourceMappingURL=couponFactory.js.map