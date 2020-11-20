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
exports.PersonalInfomationController = void 0;
const common_1 = require("@nestjs/common");
const personal_infomation_service_1 = require("./personal-infomation.service");
const personal_infomation_schemas_1 = require("./schemas/personal-infomation.schemas");
let PersonalInfomationController = class PersonalInfomationController {
    constructor(personalInfomationService) {
        this.personalInfomationService = personalInfomationService;
    }
    find(ids) {
        return this.personalInfomationService.find(ids);
    }
    findById(id) {
        return this.personalInfomationService.findById(id);
    }
    create(personalInfomationDto) {
        return this.personalInfomationService.create(personalInfomationDto);
    }
    delete(id) {
        return this.personalInfomationService.deleteById(id);
    }
    deletes(ids) {
        return this.personalInfomationService.delete(ids);
    }
};
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], PersonalInfomationController.prototype, "find", null);
__decorate([
    common_1.Get(':id'),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PersonalInfomationController.prototype, "findById", null);
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [personal_infomation_schemas_1.PersonalInfomation]),
    __metadata("design:returntype", void 0)
], PersonalInfomationController.prototype, "create", null);
__decorate([
    common_1.Delete(":id"),
    __param(0, common_1.Param()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PersonalInfomationController.prototype, "delete", null);
__decorate([
    common_1.Delete(),
    __param(0, common_1.Query()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], PersonalInfomationController.prototype, "deletes", null);
PersonalInfomationController = __decorate([
    common_1.Controller('personal-infomation'),
    __metadata("design:paramtypes", [personal_infomation_service_1.PersonalInfomationService])
], PersonalInfomationController);
exports.PersonalInfomationController = PersonalInfomationController;
//# sourceMappingURL=personal-infomation.controller.js.map