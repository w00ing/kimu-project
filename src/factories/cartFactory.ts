import Faker from "faker";
import { Cart } from "src/entity/Cart";
import { define } from "typeorm-seeding";
define(Cart, (faker: typeof Faker) => {
  const cart = new Cart();
  return cart;
});
