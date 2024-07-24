import { BoardService } from './board.service';
import { Board } from './board.entity';
export declare class BoardsResolver {
    private boardService;
    constructor(boardService: BoardService);
    boards(): Promise<Board[]>;
}
