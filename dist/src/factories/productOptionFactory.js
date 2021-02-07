"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ProductOption_1 = require("src/entity/ProductOption");
var typeorm_1 = require("typeorm");
var typeorm_seeding_1 = require("typeorm-seeding");
typeorm_seeding_1.define(ProductOption_1.ProductOption, function (faker) {
    var productOptionRepo = typeorm_1.getRepository(ProductOption_1.ProductOption);
    var name = faker.random.word();
    var productOption = productOptionRepo.create({ name: name });
    return productOption;
});
typeorm_seeding_1.define(ProductOption_1.OptionChoice, function (faker) {
    var optionChoiceRepo = typeorm_1.getRepository(ProductOption_1.OptionChoice);
    var name = faker.random.word();
    var optionChoice = optionChoiceRepo.create({ name: name });
    return optionChoice;
});
//# sourceMappingURL=productOptionFactory.js.map