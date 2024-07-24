"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const board_entity_1 = require("./board.entity");
let BoardService = class BoardService {
    constructor(boardRepository) {
        this.boardRepository = boardRepository;
    }
    async create(createBoardDto) {
        const board = new board_entity_1.Board();
        board.title = createBoardDto.title;
        board.createdAt = new Date().toISOString();
        board.updatedAt = new Date().toISOString();
        try {
            return await this.boardRepository.save(board);
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        return this.boardRepository.find();
    }
    async findOne(id) {
        return this.boardRepository.findOneBy({ id });
    }
    async update(id, updateBoardDto) {
        const board = await this.boardRepository.findOneBy({ id });
        if (!board) {
            throw new Error('Board not found');
        }
        board.title = updateBoardDto.title;
        board.updatedAt = new Date().toISOString();
        return this.boardRepository.save(board);
    }
    async remove(id) {
        const board = await this.boardRepository.findOneBy({ id });
        if (!board) {
            throw new Error('Board not found');
        }
        await this.boardRepository.remove(board);
    }
};
exports.BoardService = BoardService;
exports.BoardService = BoardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(board_entity_1.Board)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BoardService);
//# sourceMappingURL=board.service.js.map