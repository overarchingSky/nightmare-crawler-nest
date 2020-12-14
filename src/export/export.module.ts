import { Module } from '@nestjs/common';
import { ExportService } from './export.service';
import { ExportController } from './export.controller';
import { PersonalInfomationModule } from 'src/personal-information/personal-infomation.module';

@Module({
  imports:[PersonalInfomationModule],
  providers: [ExportService],
  controllers: [ExportController]
})
export class ExportModule {}
