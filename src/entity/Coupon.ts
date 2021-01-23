import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

@Entity()
export class Coupon {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  discountAmount: number;

  @Column()
  minimumPurchaseAmount: number;

  @Column({ type: "datetime" })
  expiration: Date;
}
