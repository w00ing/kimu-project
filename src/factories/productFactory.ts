import Faker from "faker";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";
import { Product } from "src/entity/Product";

define(Product, (faker: typeof Faker) => {
  const productRepo = getRepository(Product);
  let groups = ["a", "b", "c"];

  const name = faker.random.word();
  const price = faker.finance.amount(1000, 100000, 0, "₩");
  const productImages = [
    `https://picsum.photos/300/300?random=${Math.round(Math.random() * 1000)}`,
    `https://picsum.photos/300/300?random=${Math.round(Math.random() * 1000)}`,
    `https://picsum.photos/300/300?random=${Math.round(Math.random() * 1000)}`,
  ];
  const isDiscounted = faker.random.boolean();
  const discountAmount = faker.finance.amount(1000, 100000, 0, "₩");
  const discountStartDateTime = faker.date.past();
  const discountEndDateTime = faker.date.future();

  // category, subcategory, topic
  const shippingCost = faker.finance.amount(1000, 50000, 0, "₩");
  const group = faker.random.arrayElement(groups);
  const isAvailable = faker.random.boolean();
  const quantityAvailable = faker.finance.amount(1, 100, 0);
  const isTaxed = faker.random.boolean();

  // ProductOptions, cart, orders

  const product = productRepo.create({
    name,
    price,
    productImages,
    isDiscounted,
    discountAmount,
    discountStartDateTime,
    discountEndDateTime,
    shippingCost,
    group,
    isAvailable,
    quantityAvailable,
    isTaxed,
  });

  return product;
});
