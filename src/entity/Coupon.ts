import { PrimaryGeneratedColumn, Column, Entity, ManyToMany, Generated } from "typeorm";
import { User } from "./User";

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @Generated("uuid")
  code: string;

  @Column({ nullable: true })
  target: string;

  @Column()
  content: string;

  @Column({ nullable: true })
  discountAmount: string;

  @Column({ nullable: true })
  discountRate: string;

  @Column()
  minimumOrderAmount: string;

  @Column({ type: "datetime" })
  expirationDate: Date;

  @ManyToMany(type => User, user => user.coupons)
  user: User;
}
