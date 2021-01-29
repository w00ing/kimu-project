import { User } from "../entity/User";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { SocialIssue } from "../entity/SocialIssue";
import { Coupon } from "src/entity/Coupon";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(User)()
      .map(
        async (user: User): Promise<User> => {
          const socialIssues: SocialIssue[] = await factory(SocialIssue)().createMany(3);
          const coupons: Coupon[] = await factory(Coupon)().createMany(3);

          user.coupons = coupons;
          user.socialIssues = socialIssues;
          return user;
        },
      )
      .createMany(10);
  }
}
