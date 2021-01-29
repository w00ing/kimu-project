import Faker from "faker";
import { Review } from "src/entity/Review";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";
define(Review, (faker: typeof Faker) => {
  const reviewRepo = getRepository(Review);

  const stars = (Math.floor(Math.random() * 10) * 5) / 10;
  const content = faker.lorem.sentence();
  const isApproved = faker.random.boolean();
  const approvedAt = faker.date.past();
  const reviewImages = [
    `https://picsum.photos/300/300?random=${Math.round(Math.random() * 1000)}`,
    `https://picsum.photos/300/300?random=${Math.round(Math.random() * 1000)}`,
    `https://picsum.photos/300/300?random=${Math.round(Math.random() * 1000)}`,
  ];
  const review = reviewRepo.create({
    stars,
    content,
    isApproved,
    reviewImages,
    approvedAt: isApproved ? approvedAt : null,
  });
  return review;
});
