import { Controller, Post, Request } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post('create')
    create(@Request() req){
        console.log('create',req.body)
        return this.userService.create(req.body)
    }
}
