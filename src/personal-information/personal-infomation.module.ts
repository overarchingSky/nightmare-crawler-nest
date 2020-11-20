import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonalInfomationController } from './personal-infomation.controller';
import { PersonalInfomationService } from './personal-infomation.service';
import { PersonalInfomation, PersonalInfomationSchema } from './schemas/personal-infomation.schemas';

//const PersonalInfomationModel = MongooseModule.forFeature([{ name: PersonalInfomation.name, schema: PersonalInfomationSchema }])
@Module({
  imports:[MongooseModule.forFeature([{ name: PersonalInfomation.name, schema: PersonalInfomationSchema }])],
  controllers: [PersonalInfomationController],
  providers: [PersonalInfomationService],
  exports:[PersonalInfomationService]
})
export class PersonalInfomationModule {}
