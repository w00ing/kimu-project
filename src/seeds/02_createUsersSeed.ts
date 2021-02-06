import Faker from "faker";
import { User } from "../entity/User";
import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { SocialIssue } from "../entity/SocialIssue";
import { getRandom } from "src/utils/helperFunctions";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
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
    for (let issueName of socialIssueNames) {
      await factory(SocialIssue)().create({ name: issueName });
    }
    const allSocialIssues = await getRepository(SocialIssue).find();
    await factory(User)()
      .map(
        async (user: User): Promise<User> => {
          const socialIssues: SocialIssue[] = getRandom(allSocialIssues, 3);
          user.socialIssues = socialIssues;
          return user;
        },
      )
      .createMany(10);
  }
}
