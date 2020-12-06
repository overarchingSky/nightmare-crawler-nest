import { HttpService, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AccountService } from 'src/account/account.service';
import { decrypted } from './aes';

@Injectable()
export class WeixinService {
    constructor(private readonly httpService: HttpService,private readonly jwtService:JwtService, private readonly accountService: AccountService){}

    async getOpenid(appid:string, secret:string, code: string){
        const res = await this.httpService.get(`https://api.weixin.qq.com/sns/jscode2session?grant_type=authorization_code&appid=${appid}&secret=${secret}&js_code=${code}`).toPromise()
        return res.data
    }
    
    async getAccessToken(appid:string, secret:string){
        const res = await this.httpService.get(`https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${appid}&secret=${secret}`).toPromise()
        return res.data
    }

    validateAccount(openid:string){
        return this.accountService.findOne('openid',openid)
    }

    async login(account: any) {
        const payload = {
          account: account.account,
          id: account._id,
          user: account.user
        };
        return {
          accessToken: this.jwtService.sign(payload),
        };
      }
    
    async getopenid(){
        //return decrypted(param,key,iv)
    }
}
