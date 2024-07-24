import { ListCard } from "./list-card.entity";
import { ListCardService } from "./list-card.service";
export declare class ListCardResolver {
    private listCardService;
    constructor(listCardService: ListCardService);
    createCard(listId: number, title: string, description: string): Promise<ListCard>;
    updateCard(id: number, title: string, description: string): Promise<ListCard>;
    moveCard(id: number, listId: number): Promise<ListCard>;
}
