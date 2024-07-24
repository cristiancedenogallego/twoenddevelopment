import {Module} from "@nestjs/common";
import {ListService} from "./list.service";
import {ListResolver} from "./list.resolver";
import {TypeOrmModule} from "@nestjs/typeorm";
import {List} from "./list.entity";
import {ListCardModule} from "src/list-card/list-card.module";

@Module({
	imports: [TypeOrmModule.forFeature([List]), ListCardModule],
	providers: [ListResolver, ListService],
	exports: [ListResolver, ListService],
})
export class ListModule {
}