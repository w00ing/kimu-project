"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeorm_seeding_1 = require("typeorm-seeding");
var SocialIssue_1 = require("../entity/SocialIssue");
var typeorm_1 = require("typeorm");
typeorm_seeding_1.define(SocialIssue_1.SocialIssue, function (faker) {
    var socialIssueRepo = typeorm_1.getRepository(SocialIssue_1.SocialIssue);
    var socialIssue = socialIssueRepo.create();
    return socialIssue;
});
//# sourceMappingURL=socialIssueFactory.js.map