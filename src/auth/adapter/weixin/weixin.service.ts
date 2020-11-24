import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class WeixinService {
    constructor(private readonly httpService: HttpService){}

    getOpenid(appid:string, secret:string, code: string){
        console.log('123',appid,secret)
        return this.httpService.get(`https://api.weixin.qq.com/sns/jscode2session?grant_type=authorization_code&appid=${appid}&secret=${secret}&js_code=${code}`)
    }
    
    async getAccessToken(appid:string, secret:string){
        const res = await this.httpService.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`).toPromise()
        return res.data
    }
}
