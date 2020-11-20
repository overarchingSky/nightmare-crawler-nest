import { Body, Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';
import { PersonalInfomation } from 'src/personal-information/schemas/personal-infomation.schemas';
import { AccountService } from './account.service';
import { IAccountDto } from './dto/account.dto';

//@UseGuards(JwtAuthGuard)
@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService, private readonly personalInfomationService: PersonalInfomationService) {}
    @Post('create')
    async create(@Body() accountDto: IAccountDto){
        const account = await this.accountService.create(accountDto)
        accountDto.accountId = account.id
        console.log('create accountDto',accountDto)
        return this.personalInfomationService.create(accountDto)
    }
    @Get()
    find(@Query('ids') ids:string[]){
        return this.accountService.find(ids)
    }
}
