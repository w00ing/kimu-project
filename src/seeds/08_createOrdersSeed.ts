import Faker from "faker";
import { Order } from "src/entity/Order";
import { Product } from "src/entity/Product";
import { User } from "src/entity/User";
import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateOrders implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const userRepo = getRepository(User);
    const productRepo = getRepository(Product);
    const orderRepo = getRepository(Order);

    const users = await userRepo.find();
    const products = await productRepo.find();

    for (let i = 0; i < 250; i++) {
      const user = Faker.random.arrayElement(users);
      const product = Faker.random.arrayElement(products);
      const alreadyOrder = await orderRepo.findOne({ user, product });
      if (alreadyOrder) {
        continue;
      }
      await factory(Order)().create({ user, product });
    }
  }
}
