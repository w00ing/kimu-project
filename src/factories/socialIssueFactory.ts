import Faker from "faker";
import { define } from "typeorm-seeding";
import { SocialIssue } from "../entity/SocialIssue";
import { getRepository } from "typeorm";

define(SocialIssue, (faker: typeof Faker) => {
  const socialIssueRepo = getRepository(SocialIssue);

  const socialIssue = socialIssueRepo.create();

  return socialIssue;
});
