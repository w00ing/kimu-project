import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./Order";
import { Product } from "./Product";
import { Review } from "./Review";

@Entity()
export class OrderProduct {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  productId: number;

  @Column()
  orderId: string;

  @Column({ default: false })
  didWriteReview: boolean;

  @Column()
  quantity: number;

  @ManyToOne(type => Order, order => order.orderProducts)
  order: Order;

  @ManyToOne(type => Product, product => product.orderProducts)
  product: Product;

  // Review
  @OneToOne(type => Review, review => review.orderProduct)
  review: Review;
}
