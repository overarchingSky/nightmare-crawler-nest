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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalInfomationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const personal_infomation_schemas_1 = require("./schemas/personal-infomation.schemas");
let PersonalInfomationService = class PersonalInfomationService {
    constructor(PersonalInfomationModel) {
        this.PersonalInfomationModel = PersonalInfomationModel;
    }
    async create(PersonalInfomationDto) {
        const createdPersonalInfomation = new this.PersonalInfomationModel(PersonalInfomationDto);
        return createdPersonalInfomation.save();
    }
    async delete(ids) {
        return this.PersonalInfomationModel.remove({ _id: { $in: ids } }).exec();
    }
    async deleteById(id) {
        return this.PersonalInfomationModel.findByIdAndRemove(id);
    }
    async findById(id) {
        return this.PersonalInfomationModel.findById(id);
    }
    async findOne(accountId) {
        return this.PersonalInfomationModel.findOne({ accountId }).exec();
    }
    async find(ids) {
        if (ids) {
            return this.PersonalInfomationModel.find({ accountId: { $in: ids } });
        }
        else {
            return this.PersonalInfomationModel.find();
        }
    }
};
PersonalInfomationService = __decorate([
    common_1.Injectable(),
    __param(0, mongoose_1.InjectModel(personal_infomation_schemas_1.PersonalInfomation.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], PersonalInfomationService);
exports.PersonalInfomationService = PersonalInfomationService;
//# sourceMappingURL=personal-infomation.service.js.map