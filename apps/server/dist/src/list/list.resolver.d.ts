import { List } from "./list.entity";
import { ListService } from "./list.service";
import { ListCardService } from "src/list-card/list-card.service";
export declare class ListResolver {
    private listService;
    private listCardService;
    constructor(listService: ListService, listCardService: ListCardService);
    lists(boardId: number): Promise<List[]>;
    cards(list: List): Promise<import("../list-card/list-card.entity").ListCard[]>;
}
