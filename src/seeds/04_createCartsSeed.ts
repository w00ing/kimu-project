import Faker from "faker";
import { Cart } from "src/entity/Cart";
import { Product } from "src/entity/Product";
import { User } from "src/entity/User";
import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateCarts implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const userRepo = getRepository(User);
    const productRepo = getRepository(Product);

    const users = await userRepo.find();
    const products = await productRepo.find();

    await factory(Cart)()
      .map(
        async (cart: Cart): Promise<Cart> => {
          const user = Faker.random.arrayElement(users);
          const product = Faker.random.arrayElement(products);
          cart.user = user;
          cart.product = product;
          return cart;
        },
      )
      .createMany(20);
  }
}
