import Faker from "faker";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";
import { Category, Subcategory, Topic } from "src/entity/ProductClassification";
import { Product } from "src/entity/Product";

define(Category, (faker: typeof Faker) => {
  const categoryRepo = getRepository(Category);

  // const name = faker.random.arrayElement(categories);
  // const isUsed = faker.random.boolean();
  const category = categoryRepo.create();
  return category;
});

define(Subcategory, (faker: typeof Faker) => {
  const subcategoryRepo = getRepository(Subcategory);

  // const name = faker.random.word();
  // const isUsed = faker.random.boolean();
  const subCategory = subcategoryRepo.create();
  return subCategory;
});

define(Topic, (faker: typeof Faker) => {
  const topicRepo = getRepository(Topic);

  // const name = faker.random.arrayElement(topicNames);
  // const isUsed = faker.random.boolean();
  const topic = topicRepo.create();
  return topic;
});
