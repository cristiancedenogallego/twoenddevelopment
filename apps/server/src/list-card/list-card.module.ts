import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ListCard} from "./list-card.entity";
import {ListCardService} from "./list-card.service";
import {ListCardResolver} from "./list-card.resolver";

@Module({
	imports: [TypeOrmModule.forFeature([ListCard])],
	providers: [ListCardService, ListCardResolver],
	exports: [ListCardService],
})
export class ListCardModule {
}
