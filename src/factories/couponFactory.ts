import Faker from "faker";
import { Coupon } from "../entity/Coupon";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";

define(Coupon, (faker: typeof Faker) => {
  const couponRepo = getRepository(Coupon);
  let targets = ["첫구매 고객", "재구매 고객"];
  let discountOptions = ["amount", "rate"];

  const name = faker.random.word();
  const target = faker.random.arrayElement(targets);
  const content = faker.lorem.words(6);
  const discountOption = faker.random.arrayElement(discountOptions);

  const discountAmount = parseInt(faker.finance.amount(5000, 10000, 0));
  const discountRate = faker.finance.amount(10, 80, 0) + "%";
  const minimumOrderAmount = parseInt(faker.finance.amount(10000, 50000, 0));
  const expirationDate = faker.date.future();

  const coupon = couponRepo.create({
    name,
    target,
    content,
    discountAmount: discountOption === "amount" ? discountAmount : null,
    discountRate: discountOption === "rate" ? discountRate : null,
    minimumOrderAmount,
    expirationDate,
  });

  return coupon;
});
