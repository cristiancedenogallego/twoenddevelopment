import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class Newmig1721591040037 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        queryRunner.createTable(new Table({
            name: 'board',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'createdAt',
                    type: 'datetime',
                },
                {
                    name: 'updatedAt',
                    type: 'datetime',
                },
            ],
        }), true);
        queryRunner.createTable(new Table({
            name: 'list',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'createdAt',
                    type: 'datetime',
                },
                {
                    name: 'updatedAt',
                    type: 'datetime',
                },
                {
                    name: 'boardId',
                    type: 'integer',
                },
            ],
        }), true);
        queryRunner.createTable(new Table({
            name: 'listCard',
            columns: [
                {
                    name: 'id',
                    type: 'integer',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'createdAt',
                    type: 'datetime',
                },
                {
                    name: 'updatedAt',
                    type: 'datetime',
                },
                {
                    name: 'listId',
                    type: 'int',
                },
            ],
        }), true);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('listCard');
        queryRunner.dropTable('list');
        queryRunner.dropTable('board');
    }
}
