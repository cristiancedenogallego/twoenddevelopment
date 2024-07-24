import { ListCard } from 'src/list-card/list-card.entity';
export declare class List {
    id: number;
    title: string;
    cards: ListCard[];
    createdAt: Date;
    updatedAt: Date;
    boardId: number;
}
