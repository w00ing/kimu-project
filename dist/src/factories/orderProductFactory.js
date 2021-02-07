"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var OrderProduct_1 = require("src/entity/OrderProduct");
var typeorm_1 = require("typeorm");
var typeorm_seeding_1 = require("typeorm-seeding");
typeorm_seeding_1.define(OrderProduct_1.OrderProduct, function (faker) {
    var orderRepo = typeorm_1.getRepository(OrderProduct_1.OrderProduct);
    var didWriteReview = faker.random.boolean();
    var quantity = faker.random.number(10) + 1;
    var orderProduct = orderRepo.create({ didWriteReview: didWriteReview, quantity: quantity });
    return orderProduct;
});
//# sourceMappingURL=orderProductFactory.js.map