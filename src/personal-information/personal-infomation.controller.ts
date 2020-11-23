import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Query,
} from '@nestjs/common';
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
