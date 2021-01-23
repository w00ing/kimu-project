import { PrimaryGeneratedColumn, Column, Entity, ManyToMany } from "typeorm";
import { User } from "./User";

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  discountAmount: number;

  @Column()
  minimumPurchaseAmount: number;

  @Column({ type: "datetime" })
  expirationDate: Date;

  @ManyToMany(type => User, user => user.coupons)
  user: User;
}
