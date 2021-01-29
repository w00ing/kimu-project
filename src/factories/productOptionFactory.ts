import Faker from "faker";
import { OptionChoice, ProductOption } from "src/entity/ProductOption";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";

define(ProductOption, (faker: typeof Faker) => {
  const productOptionRepo = getRepository(ProductOption);

  const name = faker.random.word();
  const productOption = productOptionRepo.create({ name });
  return productOption;
});

define(OptionChoice, (faker: typeof Faker) => {
  const optionChoiceRepo = getRepository(OptionChoice);

  const name = faker.random.word();
  const optionChoice = optionChoiceRepo.create({ name });
  return optionChoice;
});
