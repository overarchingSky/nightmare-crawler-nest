import { Module } from '@nestjs/common';
import { PersonalInfomationController } from './personal-infomation.controller';
import { PersonalInfomationService } from './personal-infomation.service';

@Module({
  controllers: [PersonalInfomationController],
  providers: [PersonalInfomationService]
})
export class PersonalInfomationModule {}
