import { Repository } from 'typeorm';
import { Board } from './board.entity';
export declare class BoardService {
    private boardRepository;
    constructor(boardRepository: Repository<Board>);
    create(createBoardDto: any): Promise<Board>;
    findAll(): Promise<Board[]>;
    findOne(id: number): Promise<Board>;
    update(id: number, updateBoardDto: any): Promise<Board>;
    remove(id: number): Promise<void>;
}
