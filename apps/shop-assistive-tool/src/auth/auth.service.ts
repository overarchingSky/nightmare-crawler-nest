import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import passport = require('passport');

@Injectable()
export class AuthService {
    constructor(private userService: UserService,private jwtService: JwtService) {}

    async validateUser(account: string, pass: string): Promise<any> {
        const user = await this.userService.find(account);
        if (user && user.password === pass) {
          return user
        }
        return null;
    }

    async login(user: any) {
        const payload = { account:user.account, name: user.name, id: user._id };
        return {
          accessToken: this.jwtService.sign(payload),
        };
    }
}
