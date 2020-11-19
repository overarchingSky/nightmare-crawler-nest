import { AccountService } from './account.service';
export declare class AccountController {
    private readonly accountService;
    constructor(accountService: AccountService);
    create(req: any): Promise<import("./schemas/account.schemas").Account>;
}
