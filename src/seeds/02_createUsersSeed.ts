import Faker from "faker";
import { User } from "../entity/User";
import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { SocialIssue } from "../entity/SocialIssue";
import { Coupon } from "src/entity/Coupon";
import { Issuedcoupon } from "src/entity/Issuedcoupon";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(User)()
      .map(
        async (user: User): Promise<User> => {
          const socialIssues: SocialIssue[] = await factory(SocialIssue)().createMany(3);
          user.socialIssues = socialIssues;
          return user;
        },
      )
      .createMany(10);
  }
}
