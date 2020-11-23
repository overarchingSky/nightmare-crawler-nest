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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oss = void 0;
const OSS = require("ali-oss");
const common_1 = require("@nestjs/common");
let Oss = class Oss {
    constructor() {
        this.client = new OSS({
            region: 'oss-cn-qingdao',
            accessKeyId: 'LTAI1233kixxxxx',
            accessKeySecret: 'b166MvJ2p39yF123HTedlhAxxxxxx',
            bucket: '*****',
        });
    }
    async uploadFile(localPath, ossPath, size) {
        if (size > 5 * 1024 * 1024) {
            return await this.resumeUpload(ossPath, localPath);
        }
        else {
            return await this.upload(ossPath, localPath);
        }
    }
    async upload(ossPath, localPath) {
        let res;
        try {
            res = await this.client.put(ossPath, localPath);
            await this.client.putACL(ossPath, 'public-read');
        }
        catch (error) {
            console.log(error);
        }
        return res.url;
    }
    async resumeUpload(ossPath, localPath) {
        let checkpoint = 0;
        let bRet = '';
        for (let i = 0; i < 3; i++) {
            try {
                const result = this.client.get().multipartUpload(ossPath, localPath, {
                    checkpoint,
                    async progress(percent, cpt) {
                        checkpoint = cpt;
                    },
                });
                await this.client.putACL(ossPath, 'public-read');
                bRet = result.url;
                break;
            }
            catch (error) {
            }
        }
        console.log('resumeUpload:::::', bRet);
        return bRet;
    }
    async deleteOne(filepath) {
        if (filepath == null) {
            return;
        }
        try {
            const result = this.client.delete(filepath);
        }
        catch (e) {
            console.log(e);
        }
    }
    async deleteMulti(filepathArr) {
        try {
            const result = this.client.deleteMulti(filepathArr, { quiet: true });
        }
        catch (e) {
            console.log(e);
        }
    }
    async getFileSignatureUrl(filePath) {
        if (filePath == null) {
            console.log('get file signature failed: file name can not be empty');
            return null;
        }
        let result = '';
        try {
            result = this.client.signatureUrl(filePath, { expires: 36000 });
        }
        catch (err) {
            console.log(err);
        }
        return result;
    }
    async existObject(ossPath) {
        try {
            const result = this.client.get(ossPath);
            if (result.res.status == 200) {
                return true;
            }
        }
        catch (e) {
            if (e.code == 'NoSuchKey') {
                return false;
            }
        }
        return false;
    }
};
Oss = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], Oss);
exports.Oss = Oss;
//# sourceMappingURL=oss.service.js.map