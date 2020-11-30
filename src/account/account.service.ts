import { HttpException, Injectable, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IPersonalInfomation } from 'src/personal-information/dto/personalInfomation.dto';
import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';
import { PersonalInfomation } from 'src/personal-information/schemas/personal-infomation.schemas';
import { IAccount, IUserMeta } from './dto/account.dto';
import { User } from './interceptor/user.decorator';
import { Account } from './schemas/account.schemas';
import { FirstUser } from './user.strategy';


@Injectable()
//@User(FirstUser)
export class AccountService {
  //private readonly Accounts: AccountSchema[];
  constructor(@InjectModel(Account.name) private AccountModel: Model<Account>, private readonly personalInfomationService: PersonalInfomationService) {
    // 密码应该使用bcrypt库去进行加密
  }

  @User(FirstUser)
  async create(createCatDto: IAccount): Promise<Account> {
    // todo
    // const personalInfomation = await this.personalInfomationService.create(
    //   accountDto
    // );
    // accountDto.user = [{project:project.toUpperCase(), ref:personalInfomation._id}];
    // const createdAccount = new this.AccountModel(createCatDto);
    // const personalInfomation = await this.personalInfomationService.create(
    //     createCatDto
    // );
    // // createdAccount.updateOne({user:[{
    // //     project:project.toUpperCase(),
    // //     ref:personalInfomation._id
    // // }]})
    // const account = await createdAccount.save();
    // return this.bindUser('_id',account.id,project,personalInfomation.id)
    // //return this.findOne('_id',account._id)

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
    // return (await account.save()).populate({
    //     path: 'user.ref',
    //     model: 'PersonalInfomation',
    //   });
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
