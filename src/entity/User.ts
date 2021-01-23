import { Exclude } from "class-transformer";
import { Column, CreateDateColumn, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column({ type: "date" })
  birthdate: Date;

  @Column({ default: 0 })
  mileage: number;

  @Column({ type: "bool", default: false })
  agreedToMarketingMsgs: boolean;

  @Column()
  address: string;

  @CreateDateColumn()
  createdAt: Date;

  // @OneToOne(type => Address, address => address.user, { cascade: true })
  // public address: Address;
}
