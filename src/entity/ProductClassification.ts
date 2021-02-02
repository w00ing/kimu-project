import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

export abstract class ProductClassification {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: true })
  isUsed: boolean;
}

@Entity()
export class Category extends ProductClassification {
  @OneToMany(type => Subcategory, subcategory => subcategory.category)
  subcategories: Subcategory[];

  @OneToMany(type => Product, product => product.category)
  products: Product[];
}

@Entity()
export class Subcategory extends ProductClassification {
  @ManyToOne(type => Category, category => category.subcategories)
  category: Category;

  @Column({ nullable: true })
  productCount: number;

  @OneToMany(type => Product, product => product.subcategory)
  products: Product[];
}

@Entity()
export class Topic extends ProductClassification {
  @ManyToMany(type => Product, product => product.topics)
  products: Product[];
}
