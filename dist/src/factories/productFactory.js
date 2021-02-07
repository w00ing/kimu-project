"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var typeorm_seeding_1 = require("typeorm-seeding");
var Product_1 = require("src/entity/Product");
typeorm_seeding_1.define(Product_1.Product, function (faker) {
    var productRepo = typeorm_1.getRepository(Product_1.Product);
    var groups = ["a", "b", "c"];
    var name = faker.random.word();
    var price = parseInt(faker.finance.amount(1000, 100000, 0));
    var productImages = [
        "https://picsum.photos/300/300?random=" + Math.round(Math.random() * 1000),
        "https://picsum.photos/300/300?random=" + Math.round(Math.random() * 1000),
        "https://picsum.photos/300/300?random=" + Math.round(Math.random() * 1000),
    ];
    var isDiscounted = faker.random.boolean();
    var discountAmount = parseInt(faker.finance.amount(1000, 100000, 0));
    var discountStartDateTime = faker.date.past();
    var discountEndDateTime = faker.date.future();
    // category, subcategory, topic
    var shippingCost = parseInt(faker.finance.amount(1000, 50000, 0));
    var group = faker.random.arrayElement(groups);
    var isAvailable = faker.random.boolean();
    var quantityAvailable = faker.random.number(100);
    var isTaxed = faker.random.boolean();
    // ProductOptions, cart, orders
    var product = productRepo.create({
        name: name,
        price: price,
        productImages: productImages,
        isDiscounted: isDiscounted,
        discountAmount: isDiscounted ? discountAmount : 0,
        discountStartDateTime: discountStartDateTime,
        discountEndDateTime: discountEndDateTime,
        shippingCost: group === "c" ? 0 : shippingCost,
        group: group,
        isAvailable: isAvailable,
        quantityAvailable: isAvailable ? quantityAvailable : 0,
        isTaxed: isTaxed,
    });
    return product;
});
//# sourceMappingURL=productFactory.js.map