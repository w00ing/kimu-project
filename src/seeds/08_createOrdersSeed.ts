import Faker from "faker";
import { Order } from "src/entity/Order";
import { OrderProduct } from "src/entity/OrderProduct";
import { Product } from "src/entity/Product";
import { User } from "src/entity/User";
import { getRandom } from "src/utils/helperFunctions";
import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateOrders implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const userRepo = getRepository(User);
    const productRepo = getRepository(Product);
    const orderRepo = getRepository(Order);
    const orderProductRepo = getRepository(OrderProduct);

    const users = await userRepo.find();
    const products = await productRepo.find();

    for (let i = 0; i < 250; i++) {
      const user: User = Faker.random.arrayElement(users);
      const numberOfProducts: number = Math.ceil(Math.random() * 5);
      const selectedProducts: Product[] = getRandom(products, numberOfProducts);
      const order: Order = await factory(Order)().create({ user });
      for (let product of selectedProducts) {
        const alreadyOrderProduct: OrderProduct = await orderProductRepo.findOne({
          orderId: order.id,
          product,
        });
        if (alreadyOrderProduct) {
          continue;
        }
        await factory(OrderProduct)().create({ order, product });
        order.totalCost += product.price;
        await orderRepo.save(order);
      }
    }
  }
}
