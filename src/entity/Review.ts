import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./Order";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "decimal", precision: 2, scale: 1 })
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

  @OneToOne(type => Order, order => order.review)
  @JoinColumn({ name: "orderId" })
  order: Order;
}
