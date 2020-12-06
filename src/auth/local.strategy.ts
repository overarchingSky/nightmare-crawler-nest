import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(
    private authService: AuthService,
  ) {
    super({
      usernameField: 'account',
      passwordField: 'password',
    });
  }

  async validate(accountId: string, password: string): Promise<any> {
    const account = await this.authService.validateAccount(accountId, password);
    if (!account) {
      throw new UnauthorizedException();
    }
    console.log('account',account)
    return account;
  }
}
