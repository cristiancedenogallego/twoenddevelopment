import { Repository } from "typeorm";
import { List } from "./list.entity";
export declare class ListService {
    private listRepository;
    constructor(listRepository: Repository<List>);
    getByBoardId(boardId: number): Promise<List[]>;
}
