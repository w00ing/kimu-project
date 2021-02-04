import Faker from "faker";
import { define } from "typeorm-seeding";
import { User } from "../entity/User";
import { getRepository } from "typeorm";

define(User, (faker: typeof Faker) => {
  const userRepo = getRepository(User);
  let genders = ["여자", "남자"];
  const name = faker.internet.userName();
  const email = faker.internet.email();
  const gender = faker.random.arrayElement(genders);
  const address = faker.address.streetAddress();
  const password = faker.internet.password();
  const birthdate = faker.date.past();
  const phoneNumber = faker.phone.phoneNumber("010########");
  const mileage = faker.random.number(5000);

  const user = userRepo.create({
    name,
    email,
    gender,
    address,
    password,
    birthdate,
    phoneNumber,
    mileage,
  });

  // Cart, Orders

  return user;
});
