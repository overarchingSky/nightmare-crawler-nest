import { Controller, Get, Query } from '@nestjs/common';
import { WeixinService } from './weixin.service';

@Controller('weixin')
export class WeixinController {
    constructor(private readonly weixinService: WeixinService){}

    @Get('getOpenid')
    getOpenid(@Query('appid') appid:string, @Query('secret') secret: string, @Query('code') code: string){
        return this.weixinService.getOpenid(appid,secret,code)
    }

    @Get('getAccessToken')
    getAccessToken(@Query('appid') appid:string, @Query('secret') secret: string){
        return this.weixinService.getAccessToken(appid,secret)
    }
}
