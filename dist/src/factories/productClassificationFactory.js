"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_1 = require("typeorm");
var typeorm_seeding_1 = require("typeorm-seeding");
var ProductClassification_1 = require("src/entity/ProductClassification");
typeorm_seeding_1.define(ProductClassification_1.Category, function (faker) {
    var categoryRepo = typeorm_1.getRepository(ProductClassification_1.Category);
    // const name = faker.random.arrayElement(categories);
    // const isUsed = faker.random.boolean();
    var category = categoryRepo.create();
    return category;
});
typeorm_seeding_1.define(ProductClassification_1.Subcategory, function (faker) {
    var subcategoryRepo = typeorm_1.getRepository(ProductClassification_1.Subcategory);
    // const name = faker.random.word();
    // const isUsed = faker.random.boolean();
    var subCategory = subcategoryRepo.create();
    return subCategory;
});
typeorm_seeding_1.define(ProductClassification_1.Topic, function (faker) {
    var topicRepo = typeorm_1.getRepository(ProductClassification_1.Topic);
    // const name = faker.random.arrayElement(topicNames);
    // const isUsed = faker.random.boolean();
    var topic = topicRepo.create();
    return topic;
});
//# sourceMappingURL=productClassificationFactory.js.map