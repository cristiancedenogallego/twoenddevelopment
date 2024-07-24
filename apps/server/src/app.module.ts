import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { GraphQLModule } from '@nestjs/graphql';
import {join} from 'path';
import {TypeOrmModule} from '@nestjs/typeorm';
import {BoardModule} from './board/board.module';
import {ListModule} from './list/list.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      "type": "sqlite",
      "database": "db.sqlite",
      "entities": ["dist/**/*.entity{.ts,.js}"],
      "synchronize": true,
      "migrations": ["dist/migrations/*{.ts,.js}"],
      migrationsRun: true,
      migrationsTransactionMode: 'each',
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: [join(process.cwd(), '/../../packages/graphql/schema.graphql')],
    }),
    BoardModule,
    ListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
