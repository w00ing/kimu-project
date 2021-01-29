import Faker from "faker";
import { Order } from "src/entity/Order";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";
define(Order, (faker: typeof Faker) => {
  const orderRepo = getRepository(Order);
  let orderStatusOptions = ["결제대기", "결제완료", "배송준비", "배송중", "배송완료"];
  let claimStatusOptions = [
    "취소요청",
    "반품요청",
    "교환요청",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  const orderDateTime = faker.date.past();
  const orderStatus = faker.random.arrayElement(orderStatusOptions);
  const receiverName = faker.name.firstName();
  const claimStatus = faker.random.arrayElement(claimStatusOptions);

  const order = orderRepo.create({ orderDateTime, orderStatus, receiverName, claimStatus });

  return order;
});
