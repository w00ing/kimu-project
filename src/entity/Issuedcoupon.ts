import { Column, CreateDateColumn, Entity, Generated, ManyToOne, PrimaryColumn } from "typeorm";
import { Coupon } from "./Coupon";
import { User } from "./User";

@Entity()
export class Issuedcoupon {
  @PrimaryColumn()
  couponId: number;

  @PrimaryColumn()
  userId: number;

  @Column()
  code: string;

  @CreateDateColumn()
  issuedDate: Date;

  @Column({ type: "datetime" })
  expirationDate: Date;

  @ManyToOne(type => User, user => user.issuedcoupons)
  user: User;

  @ManyToOne(type => Coupon, coupon => coupon.issuedcoupons)
  coupon: Coupon;
}
