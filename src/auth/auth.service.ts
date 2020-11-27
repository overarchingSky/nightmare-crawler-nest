import { Injectable } from '@nestjs/common';
import { AccountService } from '../account/account.service';
import { JwtService } from '@nestjs/jwt';
import { IAccount } from 'src/account/dto/account.dto';

@Injectable()
export class AuthService {
  constructor(
    private accountService: AccountService,
    private jwtService: JwtService,
  ) {}

  async validateAccount(accountId: string, password: string): Promise<IAccount | undefined> {
    const account = await this.accountService.findOne('account',accountId);
    if (account && account.password === password) {
      return account;
    }
    return null;
  }

  async login(account: any) {
    const payload = {
      account: account.account,
      id: account._id,
      user: account.user
      //unionId:account.unionId
    };
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }
}
