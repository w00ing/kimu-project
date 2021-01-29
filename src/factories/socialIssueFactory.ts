import Faker from "faker";
import { define } from "typeorm-seeding";
import { SocialIssue } from "../entity/SocialIssue";
import { getRepository } from "typeorm";

define(SocialIssue, (faker: typeof Faker) => {
  const socialIssueRepo = getRepository(SocialIssue);
  let socialIssueNames = [
    "장애인",
    "환경",
    "아동학대",
    "성차별",
    "인종차별",
    "노인차별",
    "난민",
    "빈곤",
    "취약계층\n아동자립",
    "북한인권",
    "미혼모/부",
    "과거사",
  ];

  const name = faker.random.arrayElement(socialIssueNames);

  const socialIssue = socialIssueRepo.create({
    name,
  });

  return socialIssue;
});
