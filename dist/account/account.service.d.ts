import { Model } from 'mongoose';
import { Account } from './schemas/account.schemas';
interface AccountDto {
    id: string;
    account: string;
    name: string;
    password: string;
}
export declare class AccountService {
    private AccountModel;
    constructor(AccountModel: Model<Account>);
    create(createCatDto: AccountDto): Promise<Account>;
    findAll(): Promise<Account[]>;
    find(account: string): Promise<Account | undefined>;
}
export {};
