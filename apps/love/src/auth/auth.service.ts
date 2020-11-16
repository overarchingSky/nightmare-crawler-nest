import { Injectable } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private accountService: AccountService, private jwtService: JwtService) {}

    async validateUser(acceptAccount: string, acceptPass: string): Promise<any> {
        const account = await this.accountService.find(acceptAccount);
        if (account && account.password === acceptPass) {
          return account
        }
        return null;
    }

    async login(account: any) {
        const payload = { account:account.account, name: account.name, id: account._id };
        return {
          accessToken: this.jwtService.sign(payload),
        };
    }
}
