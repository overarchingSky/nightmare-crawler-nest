"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductReleaseModule = void 0;
const common_1 = require("@nestjs/common");
const product_release_controller_1 = require("./product-release.controller");
const product_release_service_1 = require("./product-release.service");
let ProductReleaseModule = class ProductReleaseModule {
};
ProductReleaseModule = __decorate([
    common_1.Module({
        controllers: [product_release_controller_1.ProductReleaseController],
        providers: [product_release_service_1.ProductReleaseService]
    })
], ProductReleaseModule);
exports.ProductReleaseModule = ProductReleaseModule;
//# sourceMappingURL=product-release.module.js.map