import { Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common';
import { WeixinAuthGuard } from './weixin-auth.guard';
import { WeixinService } from './weixin.service';

@Controller('weixin')
export class WeixinController {
    constructor(private readonly weixinService: WeixinService){}

    /**
     * 
     * @param unionId 
     * @param autoRegister 
     */
    @UseGuards(WeixinAuthGuard)
    @Post('login')
    async login(@Request() req/*, @Query('unionId') unionId:string, @Query() autoRegister:boolean = false*/){
        return this.weixinService.login(req.user)
    }

    @Get('getOpenid')
    getOpenid(@Query('appid') appid:string, @Query('secret') secret: string, @Query('code') code: string){
        return this.weixinService.getOpenid(appid,secret,code)
    }

    @Get('getAccessToken')
    getAccessToken(@Query('appid') appid:string, @Query('secret') secret: string){
        return this.weixinService.getAccessToken(appid,secret)
    }
}
