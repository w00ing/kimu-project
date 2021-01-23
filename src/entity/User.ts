import { Exclude } from "class-transformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Coupon } from "./Coupon";
import { SocialIssue } from "./SocialIssue";
import { Product } from "./Product";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column("text")
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

  @Column({ type: "bool", default: false })
  agreedToMarketingMsgs: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @ManyToMany(type => SocialIssue, socialIssue => socialIssue.user)
  @JoinTable()
  socialIssues: SocialIssue[];

  @ManyToMany(type => Coupon, coupon => coupon.user)
  @JoinTable()
  coupons: Coupon[];

  @ManyToMany(type => Product, product => product.usersWhoPutThisInCart)
  @JoinTable()
  productsInCart: Product[];

  @ManyToMany(type => Product, product => product.usersWhoOrderedThis)
  @JoinTable()
  productsOrdered: Product[];
}
