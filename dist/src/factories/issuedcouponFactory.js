"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var typeorm_seeding_1 = require("typeorm-seeding");
var Issuedcoupon_1 = require("src/entity/Issuedcoupon");
typeorm_seeding_1.define(Issuedcoupon_1.Issuedcoupon, function (faker) {
    var issuedcouponRepo = typeorm_1.getRepository(Issuedcoupon_1.Issuedcoupon);
    var expirationDate = faker.date.future();
    var issuedcoupon = issuedcouponRepo.create({
        expirationDate: expirationDate,
    });
    return issuedcoupon;
});
//# sourceMappingURL=issuedcouponFactory.js.map