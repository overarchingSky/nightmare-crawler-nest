import { Body, Controller, Get, Header, Headers, HttpException, Param, Post, Query } from '@nestjs/common';
import { HttpExceptionFilter } from 'src/interceptor/http-exception.filter';
import { IPersonalInfomation } from 'src/personal-information/dto/personalInfomation.dto';
import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';
import { AccountService } from './account.service';
import { IAccount, User } from './dto/account.dto';

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
  async create(@Body() accountDto: IAccount & User, @Headers('project') project:string) {
    const account = await this.accountService.create(accountDto);
    const user = await this.personalInfomationService.create(accountDto)
    return this.accountService.bindUser('_id',account.id,project,user.id)
  }
  @Get()
  find(@Query('ids') ids: string[]) {
    return this.accountService.find(ids);
  }

  @Post(':accountId/bindUser')
  async bindUser(@Param('accountId') accountId:string, @Body() userDto: User, @Headers('project') project:string){
    const user = await this.personalInfomationService.create(userDto)
    console.log('++++++',accountId,project,user.id)
    return this.accountService.bindUser('_id',accountId,project,user.id)
  }
}
