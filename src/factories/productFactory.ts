import Faker from "faker";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";
import { Product } from "src/entity/Product";

define(Product, (faker: typeof Faker) => {
  const productRepo = getRepository(Product);
  let groups = ["a", "b", "c"];

  const name = faker.random.word();
  const price = parseInt(faker.finance.amount(1000, 100000, 0));
  const productImages = [
    `https://picsum.photos/300/300?random=${Math.round(Math.random() * 1000)}`,
    `https://picsum.photos/300/300?random=${Math.round(Math.random() * 1000)}`,
    `https://picsum.photos/300/300?random=${Math.round(Math.random() * 1000)}`,
  ];
  const isDiscounted = faker.random.boolean();
  const discountAmount = parseInt(faker.finance.amount(1000, 100000, 0));
  const discountStartDateTime = faker.date.past();
  const discountEndDateTime = faker.date.future();

  // category, subcategory, topic
  const shippingCost = parseInt(faker.finance.amount(1000, 50000, 0));
  const group = faker.random.arrayElement(groups);
  const isAvailable = faker.random.boolean();
  const quantityAvailable = faker.random.number(100);
  const isTaxed = faker.random.boolean();

  // ProductOptions, cart, orders

  const product = productRepo.create({
    name,
    price,
    productImages,
    isDiscounted,
    discountAmount: isDiscounted ? discountAmount : 0,
    discountStartDateTime,
    discountEndDateTime,
    shippingCost,
    group,
    isAvailable,
    quantityAvailable: isAvailable ? quantityAvailable : 0,
    isTaxed,
  });

  return product;
});
