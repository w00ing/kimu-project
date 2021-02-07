"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_seeding_1 = require("typeorm-seeding");
var User_1 = require("../entity/User");
var typeorm_1 = require("typeorm");
typeorm_seeding_1.define(User_1.User, function (faker) {
    var userRepo = typeorm_1.getRepository(User_1.User);
    var genders = ["여자", "남자"];
    var name = faker.internet.userName();
    var email = faker.internet.email();
    var gender = faker.random.arrayElement(genders);
    var address = faker.address.streetAddress();
    var password = faker.internet.password();
    var birthdate = faker.date.past();
    var phoneNumber = faker.phone.phoneNumber("010########");
    var mileage = faker.random.number(5000);
    var user = userRepo.create({
        name: name,
        email: email,
        gender: gender,
        address: address,
        password: password,
        birthdate: birthdate,
        phoneNumber: phoneNumber,
        mileage: mileage,
    });
    // Cart, Orders
    return user;
});
//# sourceMappingURL=userFactory.js.map