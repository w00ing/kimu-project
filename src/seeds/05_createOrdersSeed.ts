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

    const users = await userRepo.find();
    const products = await productRepo.find();

    await factory(Order)()
      .map(
        async (order: Order): Promise<Order> => {
          const user = Faker.random.arrayElement(users);
          const product = Faker.random.arrayElement(products);
          order.user = user;
          order.product = product;
          return order;
        },
      )
      .createMany(20);
  }
}
