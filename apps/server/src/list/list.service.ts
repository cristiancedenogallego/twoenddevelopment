import {Injectable} from "@nestjs/common";
import {Repository} from "typeorm";
import {List} from "./list.entity";
import {InjectRepository} from "@nestjs/typeorm";

@Injectable()
export class ListService {
	constructor(
		@InjectRepository(List)
		private listRepository: Repository<List>,
	)  {}

	getByBoardId(boardId: number): Promise<List[]> {
		return this.listRepository.findBy({
			boardId,
		});
	}

}