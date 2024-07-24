import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class ListCard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column({ nullable: true })
  description: string;

  @Column()
  createdAt: Date;

  @Column()
  updatedAt: Date;

  @Column()
  listId: number;
}