import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { User } from "./User";

@Entity()
export class Address {
  @PrimaryColumn()
  userId: number;

  @Column()
  zipCode: string;

  @Column()
  addressFirstLine: string;

  @Column()
  addressSecondLine: string;

  @OneToOne(type => User, user => user.address)
  @JoinColumn({ name: "userId" })
  user: User;
}
