import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAccount, IUserMeta } from './dto/account.dto';
import { User } from './interceptor/user.decorator';
import { Account } from './schemas/account.schemas';
import { FirstUser } from './user.strategy';


@Injectable()
//@User(FirstUser)
export class AccountService {
  constructor(@InjectModel(Account.name) private AccountModel: Model<Account>) {
    // 密码应该使用bcrypt库去进行加密
  }

  @User(FirstUser)
  async create(createCatDto: IAccount): Promise<Account> {
    if(createCatDto.openid){
        // 微信方式，重复创建账户时，跳过创建，并直接返回账户信息
        const account = await this.findOne('openid',createCatDto.openid)
        if(account){
            return account
        }
    }
    if(createCatDto.account){
        const account = await this.findOne('account',createCatDto.account)
        if(account) {
            return account
            //throw new HttpException(`该账户已注册`,200)
        }
    }
    
    const createdAccount = new this.AccountModel(createCatDto);
    return createdAccount.save()
  }

  /**
   * 绑定user到账户上
   * @param field 
   * @param value 
   * @param project 项目号
   * @param userId
   */
  async bindUser(field:string,value:string,project:string,userId: string){
    if(!project){
        throw new HttpException('project 不能为空', 200)
    }
    let account = await this.findOneRaw(field, value)
    account.user = [
        ...account.user as IUserMeta[],
        {
            project:project.toUpperCase(),
            ref:userId
        }
    ]
    
    await account.save()
    return this.findOne(field,value)
  }

  /**
   * 根据account字段查询用户信息
   * @param account 
   */
  /**
   * 根据指定字段查询单个用户
   * @param field 
   * @param value 
   */
  @User(FirstUser)
  async findOne(field: string,value:string): Promise<Account | undefined> {
    return this.findOneRaw(field, value)
  }

  /**
   * 根据指定字段查询单个用户（直出模式，return的值没有经过@User装饰器装换）
   * @param field 
   * @param value 
   */
  async findOneRaw(field: string,value:string): Promise<Account | undefined> {
    return this.AccountModel.findOne({ [field]:value }).populate({
        path: 'user.ref',
        model: 'PersonalInfomation',
      });
  }

  

  @User(FirstUser)
  async find(ids?: string[]): Promise<Account[] | undefined> {
      let condition
    if (ids && ids.length > 0) {
      condition = { _id: { $in: ids } }
    }
    return  this.AccountModel.find(condition)
    .populate({
      path: 'user.ref',
      model: 'PersonalInfomation',
    })
  }
}
