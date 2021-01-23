import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "decimal", precision: 2, scale: 1 })
  stars: number;

  @Column()
  content: string;

  @Column("simple-array")
  reviewImages: string[];
}
