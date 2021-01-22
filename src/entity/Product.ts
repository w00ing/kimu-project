import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name: string;

  @Column()
  price: number;

  @Column({ type: "varchar", length: 400 })
  productImage: string;

  @Column()
  discountOption: string;

  @Column()
  shippingCost: number;

  @Column()
  group: string;

  @Column()
  isAvailable: boolean;

  @Column()
  isTaxed: boolean;

  @ManyToMany(type => Category, category => category.products)
  @JoinTable({ name: "product_category" })
  categories: Category[];
}
