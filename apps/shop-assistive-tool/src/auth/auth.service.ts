import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService,private jwtService: JwtService) {}

    async validateUser(name: string, pass: string): Promise<any> {
        const user = await this.userService.find(name);
        if (user && user.password === pass) {
          return user
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.name, sub: user._id };
        return {
          accessToken: this.jwtService.sign(payload),
        };
    }
}
