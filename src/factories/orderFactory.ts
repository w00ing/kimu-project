import Faker from "faker";
import { Order } from "src/entity/Order";
import { getRepository } from "typeorm";
import { define } from "typeorm-seeding";
define(Order, (faker: typeof Faker) => {
  const orderRepo = getRepository(Order);
  let paymentStatusOptions = ["결제대기", "결제완료"];
  let claimStatusOptions = [
    "취소요청",
    "반품요청",
    "교환요청",
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ];
  let shippingStatusOptions = ["상품준비중", "배송중", "배송완료"];

  const orderDateTime = faker.date.past();
  const paymentStatus = faker.random.arrayElement(paymentStatusOptions);
  const receiverName = faker.name.firstName();
  const receiverPhoneNumber = faker.phone.phoneNumber("010########");
  const receiverAddress = faker.address.streetAddress();
  const claimStatus = faker.random.arrayElement(claimStatusOptions);
  const shippingStatus = faker.random.arrayElement(shippingStatusOptions);
  const totalCouponDiscountAmount = parseInt(faker.finance.amount(0, 5000, 0));
  const totalMileageUsageAmount = parseInt(faker.finance.amount(0, 5000, 0));

  const order = orderRepo.create({
    orderDateTime,
    paymentStatus,
    receiverName,
    shippingStatus: paymentStatus === "결제완료" ? shippingStatus : null,
    claimStatus,
    receiverPhoneNumber,
    receiverAddress,
    totalCouponDiscountAmount,
    totalMileageUsageAmount,
  });

  return order;
});
