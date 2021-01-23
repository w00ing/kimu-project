import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";
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

  // Category options
  // TODO: Subcategories & Topic
  @ManyToMany(type => Category, category => category.products)
  @JoinTable()
  categories: Category[];

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

  // Cart and Order
  @ManyToMany(type => User, user => user.productsInCart)
  usersWhoPutThisInCart: User[];

  @ManyToMany(type => User, user => user.productsOrdered)
  usersWhoOrderedThis: User[];
}
