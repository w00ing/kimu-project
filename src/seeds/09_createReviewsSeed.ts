import Faker from "faker";
import { Order } from "src/entity/Order";
import { OrderProduct } from "src/entity/OrderProduct";
import { Product } from "src/entity/Product";
import { Review } from "src/entity/Review";
import { User } from "src/entity/User";
import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateReviews implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const orderProductRepo = getRepository(OrderProduct);
    const orderProducts = await orderProductRepo.find({
      where: { didWriteReview: true },
      relations: ["order"],
    });

    for (let orderProduct of orderProducts) {
      const userId = orderProduct.order.userId;
      const productId = orderProduct.productId;
      await factory(Review)().create({ userId, productId, orderProduct });
    }
  }
}
