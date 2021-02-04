import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { SocialIssue } from "./SocialIssue";
import { Order } from "./Order";
import { Cart } from "./Cart";
import { Review } from "./Review";
import { Issuedcoupon } from "./Issuedcoupon";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  gender: string;

  @Column({ type: "text", nullable: true })
  address: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ type: "date" })
  birthdate: Date;

  @Column()
  phoneNumber: string;

  @Column({ default: 0 })
  mileage: number;

  // @Column({ type: "bool", default: false })
  // agreedToMarketingMsgs: boolean;

  @CreateDateColumn({ type: "timestamp" })
  createdAt: Date;

  // Social Issues
  @ManyToMany(type => SocialIssue, socialIssue => socialIssue.user, { cascade: true })
  @JoinTable()
  socialIssues: SocialIssue[];

  // Coupons
  @OneToMany(type => Issuedcoupon, issuedcoupon => issuedcoupon.user)
  issuedcoupons: Issuedcoupon[];

  Reviews;
  @OneToMany(type => Review, review => review.user)
  reviews: Review[];

  // Carts
  @OneToMany(type => Cart, cart => cart.user)
  carts: Cart[];

  // Orders
  @OneToMany(type => Order, order => order.user)
  orders: Order[];
}
