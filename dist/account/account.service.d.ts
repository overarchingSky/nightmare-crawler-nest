import { Model } from 'mongoose';
import { IAccountDto } from './dto/account.dto';
import { Account } from './schemas/account.schemas';
export declare class AccountService {
    private AccountModel;
    constructor(AccountModel: Model<Account>);
    create(createCatDto: IAccountDto): Promise<Account>;
    findOne(account: string): Promise<Account | undefined>;
    find(ids?: string[]): Promise<Account[] | undefined>;
}
