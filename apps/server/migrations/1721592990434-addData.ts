import { MigrationInterface, QueryRunner } from "typeorm";

export class AddData1721592990434 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("INSERT INTO 'board' ('id', 'title', 'createdAt', 'updatedAt') VALUES ('10', 'Demo board', '2021-05-21T00:00:00.000Z', '2021-05-21T00:00:00.000Z')");
        queryRunner.query("INSERT INTO 'list' ('title', 'createdAt', 'updatedAt', 'boardId') VALUES ('Todo', '2021-05-21T00:00:00.000Z', '2021-05-21T00:00:00.000Z', 10)");
        queryRunner.query("INSERT INTO 'list' ('title', 'createdAt', 'updatedAt', 'boardId') VALUES ('Done', '2021-05-21T00:00:00.000Z', '2021-05-21T00:00:00.000Z', 10)");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.query("DELETE FROM 'board' WHERE 'id' = 10");
        queryRunner.query("DELETE FROM 'list' WHERE 'listId' = 10");
    }

}
