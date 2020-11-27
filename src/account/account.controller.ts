import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { IPersonalInfomation } from 'src/personal-information/dto/personalInfomation.dto';
import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';
import { AccountService } from './account.service';
import { IAccount } from './dto/account.dto';

//@UseGuards(JwtAuthGuard)
@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly personalInfomationService: PersonalInfomationService,
  ) {}
  @Post('create')
  async create(@Body() accountDto: IAccount & IPersonalInfomation) {
    const personalInfomation = await this.personalInfomationService.create(
      accountDto
    );
    accountDto.user = [personalInfomation._id];
    return this.accountService.create(accountDto);
    // await this.accountService.create(accountDto);
    // return personalInfomation;
  }
  @Get()
  find(@Query('ids') ids: string[]) {
    return this.accountService.find(ids);
  }
}
