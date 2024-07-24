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
exports.ListCardService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const list_card_entity_1 = require("./list-card.entity");
const typeorm_2 = require("typeorm");
let ListCardService = class ListCardService {
    constructor(listCardRepository) {
        this.listCardRepository = listCardRepository;
    }
    async getByListId(listId) {
        return this.listCardRepository.find({
            where: {
                listId,
            },
        });
    }
    async create(listId, title, description) {
        const listCard = this.listCardRepository.create({
            listId,
            title,
            description,
            createdAt: new Date(),
            updatedAt: new Date(),
        });
        return this.listCardRepository.save(listCard);
    }
    async update(id, title, description) {
        const listCard = await this.listCardRepository.findOneBy({ id });
        listCard.title = title;
        listCard.description = description;
        listCard.updatedAt = new Date();
        return this.listCardRepository.save(listCard);
    }
    async move(id, listId) {
        const listCard = await this.listCardRepository.findOneBy({ id });
        listCard.listId = listId;
        return this.listCardRepository.save(listCard);
    }
};
exports.ListCardService = ListCardService;
exports.ListCardService = ListCardService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(list_card_entity_1.ListCard)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ListCardService);
//# sourceMappingURL=list-card.service.js.map