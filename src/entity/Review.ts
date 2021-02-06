import { ColumnNumericTransformer } from "src/transformers/ColumnNumericTransformer";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { OrderProduct } from "./OrderProduct";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  productId: number;

  @Column({ type: "decimal", precision: 2, scale: 1, transformer: new ColumnNumericTransformer() })
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

  @ManyToOne(type => Product, product => product.reviews)
  product: Product;

  @ManyToOne(type => User, user => user.reviews)
  user: User;

  @OneToOne(type => OrderProduct, orderProduct => orderProduct.review)
  @JoinColumn({ name: "orderProductId" })
  orderProduct: OrderProduct;
}
