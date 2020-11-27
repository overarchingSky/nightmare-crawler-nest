import { HttpException, Injectable, UseInterceptors } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { IAccount } from './dto/account.dto';
import { User } from './interceptor/user.decorator';
import { Account } from './schemas/account.schemas';
import { FirstUser } from './user.strategy';


@Injectable()
@User(FirstUser)
export class AccountService {
  //private readonly Accounts: AccountSchema[];
  constructor(@InjectModel(Account.name) private AccountModel: Model<Account>) {
    // 密码应该使用bcrypt库去进行加密
  }

  async create(createCatDto: IAccount,project:string): Promise<Account> {
    if(!project){
        throw new HttpException('project 不能为空', 200)
    }
    // todo
    // const personalInfomation = await this.personalInfomationService.create(
    //   accountDto
    // );
    // accountDto.user = [{project:project.toUpperCase(), ref:personalInfomation._id}];
    const createdAccount = new this.AccountModel(createCatDto);
    const account = await createdAccount.save();
    return this.findOne('_id',account._id)
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
  async findOne(field: string,value:string): Promise<Account | undefined> {
    return this.AccountModel.findOne({ [field]:value }).populate({
        path: 'user.ref',
        model: 'PersonalInfomation',
      });
  }

  //@User(FirstUser)
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
