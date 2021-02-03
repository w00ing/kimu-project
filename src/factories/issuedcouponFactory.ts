import Faker from "faker";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";
import { Issuedcoupon } from "src/entity/Issuedcoupon";

define(Issuedcoupon, (faker: typeof Faker) => {
  const issuedcouponRepo = getRepository(Issuedcoupon);
  const expirationDate = faker.date.future();

  const issuedcoupon = issuedcouponRepo.create({
    expirationDate,
  });

  return issuedcoupon;
});
