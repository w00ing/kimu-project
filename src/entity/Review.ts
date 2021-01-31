import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "decimal", precision: 2, scale: 1 })
  stars: number;

  @Column()
  content: string;

  @CreateDateColumn()
  createdAt: Date;

  @Column({ default: false })
  isApproved: boolean;

  @Column({ type: "date", nullable: true })
  approvedAt: Date;

  @Column("simple-array")
  reviewImages: string[];

  @ManyToOne(type => User, user => user.reviews)
  user: User;

  @ManyToOne(type => Product, product => product.reviews)
  product: Product;

  @OneToOne(type => Order, order => order.review)
  @JoinColumn({ name: "orderId" })
  order: Order;
}
