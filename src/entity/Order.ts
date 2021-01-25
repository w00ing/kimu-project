import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { Review } from "./Review";
import { User } from "./User";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  orderId: string;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @Column({ type: "datetime" })
  orderDateTime: Date;

  @Column({ default: "결제대기" })
  orderStatus: string;

  @Column()
  receiverName: string;

  @Column({ nullable: true })
  claimStatus: string;

  // User
  @ManyToOne(type => User, user => user.orders)
  user: User;

  // Product
  @ManyToOne(type => Product, product => product.orders)
  product: Product;

  // Review
  @OneToOne(type => Review, review => review.order)
  review: Review;
}
