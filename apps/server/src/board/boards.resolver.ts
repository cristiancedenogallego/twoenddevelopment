import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { BoardService } from './board.service';
import { Board } from './board.entity';

@Resolver(of => Board)
export class BoardsResolver {
  constructor(private boardService: BoardService) {}

  @Query(returns => [Board])
  async boards() {
	return this.boardService.findAll();
  }
}