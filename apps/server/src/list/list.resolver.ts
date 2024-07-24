import {Args, Parent, Query, ResolveField, Resolver} from "@nestjs/graphql";
import {List} from "./list.entity";
import {ListService} from "./list.service";
import {ListCardService} from "src/list-card/list-card.service";

@Resolver(of => List)
export class ListResolver {
	constructor(private listService: ListService, private listCardService: ListCardService) {}

	@Query(returns => [List])
	async lists(@Args('boardId') boardId: number) {
		return this.listService.getByBoardId(boardId);
	}

	@ResolveField('cards')
	async cards(@Parent() list: List) {
		return this.listCardService.getByListId(list.id);
	}
}