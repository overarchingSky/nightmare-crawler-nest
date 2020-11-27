import { Body, Controller, Get, Header, Headers, HttpException, Post, Query } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/interceptor/http-exception.filter';
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
  /**
   * 创建一个账号及用户
   * @param accountDto 
   * @param project 项目号，项目唯一标志
   */
  @Post('create')
  async create(@Body() accountDto: IAccount & IPersonalInfomation, @Headers('project') project:string) {
    return this.accountService.create(accountDto,project);
  }
  @Get()
  find(@Query('ids') ids: string[]) {
    return this.accountService.find(ids);
  }
}
