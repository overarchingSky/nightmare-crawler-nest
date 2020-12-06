import { Strategy } from './passport-weixin/strategy';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, Injectable, Param, ParseBoolPipe, UnauthorizedException, UsePipes } from '@nestjs/common';
import { WeixinService } from './weixin.service';
import { AccountService } from 'src/account/account.service';
import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';
import { IPersonalInfomation } from 'src/personal-information/dto/personalInfomation.dto';

@Injectable()
export class WeixinStrategy extends PassportStrategy(Strategy as any) {
  constructor(
    private weixinService: WeixinService , 
    private readonly accountService: AccountService,
    private readonly personalInfomationService: PersonalInfomationService) {
    //super();
    super({
      idField: 'openid',
      autoRegisterField: 'autoRegister',
      passReqToCallback: true
    });
  }
  async validate(req,openid:string, autoRegister:boolean): Promise<any> {
    const project = req.headers.project
    if(!project){
        throw new HttpException('请求头中必须包含项目号',200)
    }
    autoRegister =  Boolean(autoRegister)
    let account = await this.weixinService.validateAccount(openid);
    if (!account) {
        if(autoRegister){
            let newAccount = {
                account:openid,
                password:'123456',
                openid
            }
            account = await this.accountService.create(newAccount)
            const user = await this.personalInfomationService.create({} as IPersonalInfomation)
            account = await this.accountService.bindUser('_id',account.id,project,user.id)
        }else{
            throw new UnauthorizedException('未注册')
        }
    }
    return account;
  }
}
