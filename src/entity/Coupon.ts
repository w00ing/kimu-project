import { PrimaryGeneratedColumn, Column, Entity, OneToMany, Generated } from "typeorm";
import { Issuedcoupon } from "./Issuedcoupon";

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  target: string;

  @Column()
  content: string;

  @Column()
  @Generated("uuid")
  code: string;

  @Column({ type: "datetime" })
  expirationDate: Date;

  @Column({ nullable: true })
  discountAmount: number;

  @Column({ nullable: true })
  discountRate: string;

  @Column()
  minimumOrderAmount: number;

  @OneToMany(type => Issuedcoupon, issuedcoupon => issuedcoupon.coupon)
  issuedcoupons: Issuedcoupon[];
}
