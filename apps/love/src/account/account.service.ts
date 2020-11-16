import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Account } from './schemas/account.schemas';

interface AccountDto {
    id:string
    account:string,
    name:string,
    password:string
}

@Injectable()
export class AccountService {
    //private readonly Accounts: AccountSchema[];
    constructor(@InjectModel(Account.name) private AccountModels: Model<Account>){
        // 密码应该使用bcrypt库去进行加密
    }

    async create(createCatDto: AccountDto): Promise<Account> {
        const createdAccount = new this.AccountModels(createCatDto);
        return createdAccount.save();
    }
    
    async findAll(): Promise<Account[]> {
        return this.AccountModels.find().exec();
    }

    async find(account: string): Promise<Account | undefined> {
        const all = await this.findAll()
        return all.find(Account => Account.account === account);
    }
}
