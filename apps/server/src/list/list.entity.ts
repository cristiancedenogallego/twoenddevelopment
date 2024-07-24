import {ListCard} from 'src/list-card/list-card.entity';
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';

@Entity()
export class List {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ length: 255 })
    title: string;

    @OneToMany(() => ListCard, listCard => listCard.listId)
    cards: ListCard[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @Column({
        nullable: true,
    })
    boardId: number;
}