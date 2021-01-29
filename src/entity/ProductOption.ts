import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity()
export class ProductOption {
  @PrimaryGeneratedColumn()
  id: number;

  //   @Column({ type: "simple-array" })
  //   suboptions: string[];

  @Column()
  name: string;

  @OneToMany(type => OptionChoice, optionChoice => optionChoice.productOption)
  optionChoices: OptionChoice[];

  @ManyToOne(type => Product, product => product.productOptions)
  product: Product;
}

@Entity()
export class OptionChoice {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(type => ProductOption, productOption => productOption.optionChoices)
  productOption: ProductOption;
}
