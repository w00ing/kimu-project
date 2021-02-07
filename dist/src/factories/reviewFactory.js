"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Review_1 = require("src/entity/Review");
var typeorm_1 = require("typeorm");
var typeorm_seeding_1 = require("typeorm-seeding");
typeorm_seeding_1.define(Review_1.Review, function (faker) {
    var reviewRepo = typeorm_1.getRepository(Review_1.Review);
    var stars = (Math.floor(Math.random() * 10) * 5) / 10;
    var content = faker.lorem.sentence();
    var isApproved = faker.random.boolean();
    var approvedAt = faker.date.past();
    var reviewImages = [
        "https://picsum.photos/300/300?random=" + Math.round(Math.random() * 1000),
        "https://picsum.photos/300/300?random=" + Math.round(Math.random() * 1000),
        "https://picsum.photos/300/300?random=" + Math.round(Math.random() * 1000),
    ];
    var review = reviewRepo.create({
        stars: stars,
        content: content,
        isApproved: isApproved,
        reviewImages: reviewImages,
        approvedAt: isApproved ? approvedAt : null,
    });
    return review;
});
//# sourceMappingURL=reviewFactory.js.map