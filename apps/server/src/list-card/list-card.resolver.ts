import {Args, Mutation, Resolver} from "@nestjs/graphql";
import {ListCard} from "./list-card.entity";
import {ListCardService} from "./list-card.service";

@Resolver(of => ListCard)
export class ListCardResolver {
	constructor(private listCardService: ListCardService) {}

	@Mutation(returns => ListCard)
	async createCard(@Args('listId') listId: number, @Args('title') title: string, @Args('description') description: string) {
		return this.listCardService.create(listId, title, description);
	}

	@Mutation(returns => ListCard)
	async updateCard(@Args('id') id: number, @Args('title') title: string, @Args('description') description: string) {
		return this.listCardService.update(id, title, description);
	}

	@Mutation(returns => ListCard)
	async moveCard(@Args('id') id: number, @Args('listId') listId: number) {
		return this.listCardService.move(id, listId);
	}
}