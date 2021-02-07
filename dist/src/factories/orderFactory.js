"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Order_1 = require("src/entity/Order");
var typeorm_1 = require("typeorm");
var typeorm_seeding_1 = require("typeorm-seeding");
typeorm_seeding_1.define(Order_1.Order, function (faker) {
    var orderRepo = typeorm_1.getRepository(Order_1.Order);
    var paymentStatusOptions = ["결제대기", "결제완료"];
    var claimStatusOptions = [
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
    var shippingStatusOptions = ["상품준비중", "배송중", "배송완료"];
    var orderDateTime = faker.date.past();
    var paymentStatus = faker.random.arrayElement(paymentStatusOptions);
    var receiverName = faker.name.firstName();
    var receiverPhoneNumber = faker.phone.phoneNumber("010########");
    var receiverAddress = faker.address.streetAddress();
    var claimStatus = faker.random.arrayElement(claimStatusOptions);
    var shippingStatus = faker.random.arrayElement(shippingStatusOptions);
    var totalCouponDiscountAmount = parseInt(faker.finance.amount(0, 5000, 0));
    var totalMileageUsageAmount = parseInt(faker.finance.amount(0, 5000, 0));
    var order = orderRepo.create({
        orderDateTime: orderDateTime,
        paymentStatus: paymentStatus,
        receiverName: receiverName,
        shippingStatus: paymentStatus === "결제완료" ? shippingStatus : null,
        claimStatus: claimStatus,
        receiverPhoneNumber: receiverPhoneNumber,
        receiverAddress: receiverAddress,
        totalCouponDiscountAmount: totalCouponDiscountAmount,
        totalMileageUsageAmount: totalMileageUsageAmount,
    });
    return order;
});
//# sourceMappingURL=orderFactory.js.map