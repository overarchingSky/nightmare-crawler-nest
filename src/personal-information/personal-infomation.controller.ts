import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { PersonalInfomationService } from './personal-infomation.service';
import { PersonalInfomation } from './schemas/personal-infomation.schemas';

@Controller('personal-infomation')
export class PersonalInfomationController {
  constructor(
    private readonly personalInfomationService: PersonalInfomationService,
  ) {}
  /**
   * 批量查询
   * @param ids
   */
  @Get()
  find(@Query('ids') ids: string[]): Promise<PersonalInfomation[] | undefined> {
    return this.personalInfomationService.find(ids);
  }
  /**
   * 单个查询
   * @param id
   */
  @Get(':id')
  findById(@Param() id: string): Promise<PersonalInfomation | undefined> {
    return this.personalInfomationService.findById(id);
  }
  @Post('create')
  create(@Body() personalInfomationDto: PersonalInfomation) {
    return this.personalInfomationService.create(personalInfomationDto);
  }

  /**
   * 更新用户信息 暂未使用
   * @param id
   */
  @UseGuards(JwtAuthGuard)
  @Post()
  update(@Request() req, @Body() personalInfomationDto: PersonalInfomation) {
      const account = req.user
      const id = account.user._id
    return this.personalInfomationService.update('_id', id, personalInfomationDto);
  }
  /**
   * 删除指定的用户信息
   * @param id
   */
  @Delete(':id')
  delete(@Param() id: string) {
    return this.personalInfomationService.deleteById(id);
  }
  /**
   * 批量删除用户信息
   * @param ids 要删除的id集合
   */
  @Delete()
  deletes(@Query() ids: string[]) {
    return this.personalInfomationService.delete(ids);
  }

}
