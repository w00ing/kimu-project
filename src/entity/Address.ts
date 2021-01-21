import { User } from "./User";
import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public street: string;

  @Column()
  public city: string;

  @Column()
  public country: string;

  @Column()
  public details: string;

  @OneToOne(type => User, (user: User) => user.address)
  @JoinColumn()
  public user: User;
}
