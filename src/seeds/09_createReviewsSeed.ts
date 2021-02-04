import { OrderProduct } from "src/entity/OrderProduct";
import { Review } from "src/entity/Review";
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
