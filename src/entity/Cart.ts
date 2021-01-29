import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";
import { User } from "./User";

@Entity()
export class Cart {
  @PrimaryColumn()
  userId: number;

  @PrimaryColumn()
  productId: number;

  @ManyToOne(type => User, user => user.carts)
  user: User;

  @ManyToOne(type => Product, product => product.carts)
  product: Product;
}
