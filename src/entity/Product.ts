import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./Order";
import { Category, Subcategory, Topic } from "./ProductClassification";
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
  price: number;

  @Column("simple-array")
  productImages: string[];

  // Discount options
  @Column({ default: false })
  isDiscounted: boolean;

  @Column({ default: 0 })
  discountAmount: number;

  @Column({ type: "datetime", nullable: true })
  discountStartDateTime: Date;

  @Column({ type: "datetime", nullable: true })
  discountEndDateTime: Date;

  // Category & Subcategory
  @ManyToOne(type => Category, category => category.products)
  category: Category;

  @ManyToOne(type => Subcategory, subcategory => subcategory.products)
  subcategory: Subcategory;

  // Topic
  @ManyToMany(type => Topic, topic => topic.products)
  @JoinTable()
  topics: Topic[];

  // Shipping options
  @Column({ default: 0 })
  shippingCost: number;

  @Column()
  group: string;

  // Can I buy this product?
  @Column()
  isAvailable: boolean;

  @Column()
  quantityAvailable: number;

  // Tax options
  @Column()
  isTaxed: boolean;

  // Cart
  @ManyToMany(type => User, user => user.productsInCart)
  usersWhoPutThisInCart: User[];

  // Orders
  @ManyToMany(type => Order, order => order.product)
  orders: Order[];
}
