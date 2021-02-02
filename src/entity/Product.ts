import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Cart } from "./Cart";
import { Order } from "./Order";
import { Category, Subcategory, Topic } from "./ProductClassification";
import { ProductOption } from "./ProductOption";
import { Review } from "./Review";
import { User } from "./User";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id: number;

  // Basic info
  // TODO: 옵션?
  @Column()
  name: string;

  @Column()
  price: string;

  @Column({ type: "simple-array", nullable: true })
  productImages: string[];

  // Discount options
  @Column({ default: false })
  isDiscounted: boolean;

  @Column({ default: 0 })
  discountAmount: string;

  @Column({ type: "datetime", nullable: true })
  discountStartDateTime: Date;

  @Column({ type: "datetime", nullable: true })
  discountEndDateTime: Date;

  // Category & Subcategory
  // @ManyToOne(type => Category, category => category.products)
  // category: Category;

  @ManyToOne(type => Subcategory, subcategory => subcategory.products)
  subcategory: Subcategory;

  // Topic
  @ManyToMany(type => Topic, topic => topic.products)
  @JoinTable()
  topics: Topic[];

  // Shipping options
  @Column({ default: 0 })
  shippingCost: string;

  @Column()
  group: string;

  // Can I buy this product?
  @Column({ default: true })
  isAvailable: boolean;

  @Column({ default: 0 })
  quantityAvailable: number;

  // Tax options
  @Column({ default: true })
  isTaxed: boolean;

  // Product Options
  @OneToMany(type => ProductOption, productOption => productOption.product)
  productOptions: ProductOption[];

  // Reviews
  @OneToMany(type => Review, review => review.product)
  reviews: Review[];

  // Cart
  @OneToMany(type => Cart, cart => cart.product)
  carts: Cart[];

  // Orders
  @OneToMany(type => Order, order => order.product)
  orders: Order[];
}
