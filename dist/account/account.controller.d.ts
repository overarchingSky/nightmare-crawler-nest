import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';
import { AccountService } from './account.service';
import { IAccountDto } from './dto/account.dto';
export declare class AccountController {
    private readonly accountService;
    private readonly personalInfomationService;
    constructor(accountService: AccountService, personalInfomationService: PersonalInfomationService);
    create(accountDto: IAccountDto): Promise<import("../personal-information/schemas/personal-infomation.schemas").PersonalInfomation>;
    find(ids: string[]): Promise<import("./schemas/account.schemas").Account[]>;
}
