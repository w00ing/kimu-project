import Faker from "faker";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";
import { Category, Subcategory, Topic } from "src/entity/ProductClassification";
import { Product } from "src/entity/Product";

define(Category, (faker: typeof Faker) => {
  const categoryRepo = getRepository(Category);

  const name = faker.random.word();
  const isUsed = faker.random.boolean();
  const category = categoryRepo.create({ name, isUsed });
  return category;
});

define(Subcategory, (faker: typeof Faker) => {
  const subcategoryRepo = getRepository(Subcategory);

  const name = faker.random.word();
  const isUsed = faker.random.boolean();
  const subCategory = subcategoryRepo.create({ name, isUsed });
  return subCategory;
});

define(Topic, (faker: typeof Faker) => {
  const topicRepo = getRepository(Topic);
  const productRepo = getRepository(Product);

  const name = faker.random.word();
  const isUsed = faker.random.boolean();
  const topic = topicRepo.create({ name, isUsed });
  return topic;
});
