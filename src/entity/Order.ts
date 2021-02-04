import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { OrderProduct } from "./OrderProduct";
import { Review } from "./Review";
import { User } from "./User";

@Entity()
export class Order {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  userId: number;

  @Column({ type: "datetime" })
  orderDateTime: Date;

  @Column({ default: "결제대기" })
  orderStatus: string;

  @Column()
  receiverName: string;

  @Column({ nullable: true })
  claimStatus: string;

  @Column({ nullable: true })
  orderRequest: string;

  // User
  @ManyToOne(type => User, user => user.orders)
  user: User;

  // OrderProduct
  @OneToMany(type => OrderProduct, orderProduct => orderProduct.order)
  orderProducts: OrderProduct[];
}
