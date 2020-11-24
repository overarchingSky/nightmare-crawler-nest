import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class WeixinService {
    constructor(private readonly httpService: HttpService){}

    getOpenid(appid:string, secret:string){
        return this.httpService.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`)
    }
}
