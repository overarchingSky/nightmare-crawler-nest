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
exports.AccountController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const personal_infomation_service_1 = require("../personal-information/personal-infomation.service");
const personal_infomation_schemas_1 = require("../personal-information/schemas/personal-infomation.schemas");
const account_service_1 = require("./account.service");
let AccountController = class AccountController {
    constructor(accountService, personalInfomationService) {
        this.accountService = accountService;
        this.personalInfomationService = personalInfomationService;
    }
    async create(accountDto) {
        const account = await this.accountService.create(accountDto);
        accountDto.accountId = account.id;
        console.log('create accountDto', accountDto);
        return this.personalInfomationService.create(accountDto);
    }
    find(ids) {
        return this.accountService.find(ids);
    }
};
__decorate([
    common_1.Post('create'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AccountController.prototype, "create", null);
__decorate([
    common_1.Get(),
    __param(0, common_1.Query('ids')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], AccountController.prototype, "find", null);
AccountController = __decorate([
    common_1.Controller('account'),
    __metadata("design:paramtypes", [account_service_1.AccountService, personal_infomation_service_1.PersonalInfomationService])
], AccountController);
exports.AccountController = AccountController;
//# sourceMappingURL=account.controller.js.map