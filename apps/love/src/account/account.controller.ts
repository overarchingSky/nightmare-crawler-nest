import { Controller, Post, Request } from '@nestjs/common';
import { AccountService } from './account.service';

@Controller('account')
export class AccountController {
    constructor(private readonly accountService: AccountService) {}

    @Post('create')
    create(@Request() req){
        return this.accountService.create(req.body)
    }
}
