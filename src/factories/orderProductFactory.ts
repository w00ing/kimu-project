import Faker from "faker";
import { OrderProduct } from "src/entity/OrderProduct";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";
define(OrderProduct, (faker: typeof Faker) => {
  const orderRepo = getRepository(OrderProduct);
  const didWriteReview = faker.random.boolean();
  const quantity = faker.random.number(10);
  const orderProduct = orderRepo.create({ didWriteReview, quantity });

  return orderProduct;
});
