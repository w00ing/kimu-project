import { Address } from "./Address";
import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  @Exclude()
  public password: string;

  @Column()
  public name: string;

  @Column()
  public phoneNumber: string;

  @Column({ type: "date" })
  public birthdate: Date;

  @Column({ default: 0 })
  public mileage: number;

  @Column({ type: "bool", default: false })
  public agreedToMarketingMsgs: boolean;

  @CreateDateColumn()
  public createdAt: Date;

  @OneToOne(type => Address, address => address.user, { cascade: true })
  public address: Address;
}
