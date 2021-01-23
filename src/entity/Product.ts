import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./Category";

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  name: string;

  @Column()
  price: number;

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

  @Column("simple-array")
  productImages: string[];

  @ManyToMany(type => Category, category => category.products)
  @JoinTable({ name: "product_x_category" })
  categories: Category[];
}
