import Faker from "faker";
import { Coupon } from "src/entity/Coupon";
import { Issuedcoupon } from "src/entity/Issuedcoupon";
import { User } from "src/entity/User";
import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateIssuedcoupons implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const users: User[] = await getRepository(User).find();
    const coupons: Coupon[] = await getRepository(Coupon).find();
    for (let i = 0; i < 30; i++) {
      const user = Faker.random.arrayElement(users);
      const coupon = Faker.random.arrayElement(coupons);
      const alreadyIssuedcoupon = await getRepository(Issuedcoupon).findOne({ user, coupon });
      if (alreadyIssuedcoupon) {
        continue;
      }
      await factory(Issuedcoupon)().create({ user, coupon });
    }
  }
}
