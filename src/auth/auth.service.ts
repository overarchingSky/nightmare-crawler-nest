import { Injectable } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async validateAccount(accountId: string, password: string): Promise<any> {
    const account = await this.accountService.findOne('account',accountId);
    if (account && account.password === password) {
      return account;
    }
    return null;
  }

  async login(account: any) {
    const payload = {
      account: account.account,
      name: account.name,
      id: account._id,
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
