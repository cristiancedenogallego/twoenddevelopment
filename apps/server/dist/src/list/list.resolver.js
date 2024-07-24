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
exports.ListResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const list_entity_1 = require("./list.entity");
const list_service_1 = require("./list.service");
const list_card_service_1 = require("../list-card/list-card.service");
let ListResolver = class ListResolver {
    constructor(listService, listCardService) {
        this.listService = listService;
        this.listCardService = listCardService;
    }
    async lists(boardId) {
        return this.listService.getByBoardId(boardId);
    }
    async cards(list) {
        return this.listCardService.getByListId(list.id);
    }
};
exports.ListResolver = ListResolver;
__decorate([
    (0, graphql_1.Query)(returns => [list_entity_1.List]),
    __param(0, (0, graphql_1.Args)('boardId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ListResolver.prototype, "lists", null);
__decorate([
    (0, graphql_1.ResolveField)('cards'),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [list_entity_1.List]),
    __metadata("design:returntype", Promise)
], ListResolver.prototype, "cards", null);
exports.ListResolver = ListResolver = __decorate([
    (0, graphql_1.Resolver)(of => list_entity_1.List),
    __metadata("design:paramtypes", [list_service_1.ListService, list_card_service_1.ListCardService])
], ListResolver);
//# sourceMappingURL=list.resolver.js.map