import { ListCard } from "./list-card.entity";
import { Repository } from "typeorm";
export declare class ListCardService {
    private listCardRepository;
    constructor(listCardRepository: Repository<ListCard>);
    getByListId(listId: number): Promise<ListCard[]>;
    create(listId: number, title: string, description: string): Promise<ListCard>;
    update(id: number, title: string, description: string): Promise<ListCard>;
    move(id: number, listId: number): Promise<ListCard>;
}
