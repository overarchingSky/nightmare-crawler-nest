import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';
import { AccountService } from './account.service';
import { IAccountDto } from './dto/account.dto';

//@UseGuards(JwtAuthGuard)
@Controller('account')
export class AccountController {
  constructor(
    private readonly accountService: AccountService,
    private readonly personalInfomationService: PersonalInfomationService,
  ) {}
  @Post('create')
  async create(@Body() accountDto: IAccountDto) {
    const personalInfomation = await this.personalInfomationService.create(
      accountDto,
    );
    console.log('personalInfomation', personalInfomation);
    accountDto.user = [personalInfomation._id];
    await this.accountService.create(accountDto);
    return personalInfomation;
  }
  @Get()
  find(@Query('ids') ids: string[]) {
    return this.accountService.find(ids);
  }
}
