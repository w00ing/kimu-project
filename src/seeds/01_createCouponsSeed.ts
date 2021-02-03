import { Coupon } from "../entity/Coupon";
import { Connection } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";
import { SocialIssue } from "../entity/SocialIssue";

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await factory(Coupon)().createMany(10);
  }
}
