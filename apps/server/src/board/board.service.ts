import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from './board.entity';

@Injectable()
export class BoardService {
	constructor(
		@InjectRepository(Board)
		private boardRepository: Repository<Board>,
	) {}

	async create(createBoardDto): Promise<Board> {
		const board = new Board();
		board.title = createBoardDto.title;
		board.createdAt = new Date().toISOString();
		board.updatedAt = new Date().toISOString();
		try {
			return await this.boardRepository.save(board);
		} catch (error) {
			throw error;
		}
	}

	async findAll(): Promise<Board[]> {
		return this.boardRepository.find();
	}

	async findOne(id: number): Promise<Board> {
		return this.boardRepository.findOneBy({id});
	}

	async update(id: number, updateBoardDto): Promise<Board> {
		const board = await this.boardRepository.findOneBy({id});
		if (!board) {
			throw new Error('Board not found');
		}
		board.title = updateBoardDto.title;
		board.updatedAt = new Date().toISOString();
		return this.boardRepository.save(board);
	}

	async remove(id: number): Promise<void> {
		const board = await this.boardRepository.findOneBy({id});
		if (!board) {
			throw new Error('Board not found');
		}
		await this.boardRepository.remove(board);
	}
}