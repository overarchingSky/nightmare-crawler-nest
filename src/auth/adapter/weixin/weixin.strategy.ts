import { Strategy } from './passport-weixin/strategy';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Param, ParseBoolPipe, UnauthorizedException, UsePipes } from '@nestjs/common';
import { WeixinService } from './weixin.service';
import { AccountService } from 'src/account/account.service';

@Injectable()
export class WeixinStrategy extends PassportStrategy(Strategy as any) {
  constructor(
    private weixinService: WeixinService , private readonly accountService: AccountService) {
    //super();
    super({
      idField: 'unionId',
      autoRegisterField: 'autoRegister',
    });
  }
  async validate(unionId:string, autoRegister:boolean,project:string): Promise<any> {
    autoRegister =  Boolean(autoRegister)
    let account = await this.weixinService.validateAccount(unionId);
    if (!account) {
        if(autoRegister){
            let newAccount = {
                account:unionId,
                password:'123456',
                unionId
            }
            await this.accountService.create(newAccount, project)
            account = await this.weixinService.validateAccount(unionId);
        }else{
            throw new UnauthorizedException('未注册')
        }
    }
    return account;
  }
}
