import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Review } from "./Review";

export abstract class Image {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  imageUrl: string;
}

// @Entity()
// export class ReviewImage extends Image {
//   @ManyToOne(type => Review, review => review.reviewImages)
//   review: Review;
// }
