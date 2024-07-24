"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Newmig1721591040037 = void 0;
const typeorm_1 = require("typeorm");
class Newmig1721591040037 {
    async up(queryRunner) {
        queryRunner.createTable(new typeorm_1.Table({
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
        queryRunner.createTable(new typeorm_1.Table({
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
        queryRunner.createTable(new typeorm_1.Table({
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
    async down(queryRunner) {
        queryRunner.dropTable('listCard');
        queryRunner.dropTable('list');
        queryRunner.dropTable('board');
    }
}
exports.Newmig1721591040037 = Newmig1721591040037;
//# sourceMappingURL=1721591040037-newmig.js.map