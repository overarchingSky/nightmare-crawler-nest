import { AccountService } from '../account/account.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private accountService;
    private jwtService;
    constructor(accountService: AccountService, jwtService: JwtService);
    validateAccount(acceptAccount: string, acceptPass: string): Promise<any>;
    login(account: any): Promise<{
        accessToken: string;
    }>;
}