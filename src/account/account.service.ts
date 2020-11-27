import { Injectable, UseInterceptors } from '@nestjs/common';
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

  async create(createCatDto: IAccount): Promise<Account> {
    const createdAccount = new this.AccountModel(createCatDto);
    return createdAccount.save();
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
    return this.AccountModel.findOne({ [field]:value });
  }

  //@User(FirstUser)
  async find(ids?: string[]): Promise<Account[] | undefined> {
    if (ids && ids.length > 0) {
      return this.AccountModel.find({ _id: { $in: ids } });
    } else {
        const account = await this.AccountModel.find().populate({
            path: 'user',
            model: 'PersonalInfomation',
          })
      return this.AccountModel.find()
      .populate({
        path: 'user',
        model: 'PersonalInfomation',
      })
    }
  }
}
