import Faker from "faker";
import { Order } from "src/entity/Order";
import { Product } from "src/entity/Product";
import { Review } from "src/entity/Review";
import { User } from "src/entity/User";
import { Connection, getRepository } from "typeorm";
import { Factory, Seeder } from "typeorm-seeding";

export default class CreateReviews implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const orderRepo = getRepository(Order);
    const userRepo = getRepository(User);
    const productRepo = getRepository(Product);
    const orders = await orderRepo.find();
    await factory(Review)()
      .map(
        async (review: Review): Promise<Review> => {
          try {
            const order = Faker.random.arrayElement(orders);
            const index = orders.indexOf(order);
            orders.splice(index, 1);
            review.order = order;
            review.userId = order.userId;
            review.productId = order.productId;
            return review;
          } catch (e) {
            console.log(e);
          }
        },
      )
      .createMany(200);
  }
}
