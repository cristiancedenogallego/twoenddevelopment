import {Module} from "@nestjs/common";
import {BoardService} from "./board.service";
import {BoardsResolver} from "./boards.resolver";
import {Board} from "./board.entity";
import {TypeOrmModule} from "@nestjs/typeorm";

@Module({
	imports: [TypeOrmModule.forFeature([Board])],
	providers: [BoardService, BoardsResolver],
	exports: [BoardService, BoardsResolver],
})
export class BoardModule {
}