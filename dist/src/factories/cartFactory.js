"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cart_1 = require("src/entity/Cart");
var typeorm_seeding_1 = require("typeorm-seeding");
typeorm_seeding_1.define(Cart_1.Cart, function (faker) {
    var cart = new Cart_1.Cart();
    return cart;
});
//# sourceMappingURL=cartFactory.js.map