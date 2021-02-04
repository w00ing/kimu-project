import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderProduct } from "./OrderProduct";
import { User } from "./User";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: number;

  @Column({ type: "datetime" })
  orderDateTime: Date;

  @Column({ default: "결제대기" })
  paymentStatus: string;

  @Column()
  receiverName: string;

  @Column()
  receiverAddress: string;

  @Column()
  receiverPhoneNumber: string;

  @Column({ nullable: true })
  claimStatus: string;

  @Column({ nullable: true })
  orderRequest: string;

  @Column()
  totalCouponDiscountAmount: number;

  @Column()
  totalMileageUsageAmount: number;

  @Column({ nullable: true })
  totalCost: number;

  @Column({ nullable: true })
  shippingCost: number;

  @Column({ nullable: true })
  shippingStatus: string;

  // User
  @ManyToOne(type => User, user => user.orders)
  user: User;

  // OrderProduct
  @OneToMany(type => OrderProduct, orderProduct => orderProduct.order)
  orderProducts: OrderProduct[];
}
