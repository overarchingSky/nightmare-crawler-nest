import { Controller, Post, UseGuards, Get, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { JwtAuthGuard } from './jwt-auth.guard';
import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly personalInfomationService: PersonalInfomationService,
  ) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    console.log('login', req.user.id);
    const userInfo = await this.personalInfomationService.findOne(req.user.id);
    console.log('userInfo', userInfo);
    return userInfo;
    return req.user;
  }
}
