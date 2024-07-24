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
exports.ListCardResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const list_card_entity_1 = require("./list-card.entity");
const list_card_service_1 = require("./list-card.service");
let ListCardResolver = class ListCardResolver {
    constructor(listCardService) {
        this.listCardService = listCardService;
    }
    async createCard(listId, title, description) {
        return this.listCardService.create(listId, title, description);
    }
    async updateCard(id, title, description) {
        return this.listCardService.update(id, title, description);
    }
    async moveCard(id, listId) {
        return this.listCardService.move(id, listId);
    }
};
exports.ListCardResolver = ListCardResolver;
__decorate([
    (0, graphql_1.Mutation)(returns => list_card_entity_1.ListCard),
    __param(0, (0, graphql_1.Args)('listId')),
    __param(1, (0, graphql_1.Args)('title')),
    __param(2, (0, graphql_1.Args)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], ListCardResolver.prototype, "createCard", null);
__decorate([
    (0, graphql_1.Mutation)(returns => list_card_entity_1.ListCard),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('title')),
    __param(2, (0, graphql_1.Args)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String, String]),
    __metadata("design:returntype", Promise)
], ListCardResolver.prototype, "updateCard", null);
__decorate([
    (0, graphql_1.Mutation)(returns => list_card_entity_1.ListCard),
    __param(0, (0, graphql_1.Args)('id')),
    __param(1, (0, graphql_1.Args)('listId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], ListCardResolver.prototype, "moveCard", null);
exports.ListCardResolver = ListCardResolver = __decorate([
    (0, graphql_1.Resolver)(of => list_card_entity_1.ListCard),
    __metadata("design:paramtypes", [list_card_service_1.ListCardService])
], ListCardResolver);
//# sourceMappingURL=list-card.resolver.js.map