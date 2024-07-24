import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {ListCard} from "./list-card.entity";
import {Repository} from "typeorm";

@Injectable()
export class ListCardService {
	constructor(@InjectRepository(ListCard) private listCardRepository: Repository<ListCard>) {}

	async getByListId(listId: number): Promise<ListCard[]> {
		return this.listCardRepository.find({
			where: {
				listId,
			},
		});
	}

	async create(listId: number, title: string, description: string): Promise<ListCard> {
		const listCard = this.listCardRepository.create({
			listId,
			title,
			description,
			createdAt: new Date(),
			updatedAt: new Date(),
		});

		return this.listCardRepository.save(listCard);
	}

	async update(id: number, title: string, description: string): Promise<ListCard> {
		const listCard = await this.listCardRepository.findOneBy({id});

		listCard.title = title;
		listCard.description = description;
		listCard.updatedAt = new Date();

		return this.listCardRepository.save(listCard);
	}

	async move(id: number, listId: number): Promise<ListCard> {
		const listCard = await this.listCardRepository.findOneBy({id});

		listCard.listId = listId;

		return this.listCardRepository.save(listCard);
	}
}