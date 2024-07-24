"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddData1721592990434 = void 0;
class AddData1721592990434 {
    async up(queryRunner) {
        queryRunner.query("INSERT INTO 'board' ('id', 'title', 'createdAt', 'updatedAt') VALUES ('10', 'Demo board', '2021-05-21T00:00:00.000Z', '2021-05-21T00:00:00.000Z')");
        queryRunner.query("INSERT INTO 'list' ('title', 'createdAt', 'updatedAt', 'boardId') VALUES ('Todo', '2021-05-21T00:00:00.000Z', '2021-05-21T00:00:00.000Z', 10)");
        queryRunner.query("INSERT INTO 'list' ('title', 'createdAt', 'updatedAt', 'boardId') VALUES ('Done', '2021-05-21T00:00:00.000Z', '2021-05-21T00:00:00.000Z', 10)");
    }
    async down(queryRunner) {
        queryRunner.query("DELETE FROM 'board' WHERE 'id' = 10");
        queryRunner.query("DELETE FROM 'list' WHERE 'listId' = 10");
    }
}
exports.AddData1721592990434 = AddData1721592990434;
//# sourceMappingURL=1721592990434-addData.js.map