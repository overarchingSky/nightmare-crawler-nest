import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ProductReleaseModule } from '../personal-information/product-release.module';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from '../account/account.module';
import { PersonalInfomationModule } from 'src/personal-information/personal-infomation.module';
import { OssModule } from 'src/oss/oss.module';
import { ExportModule } from 'src/export/export.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nest'),
    OssModule,
    AuthModule,
    AccountModule,
    PersonalInfomationModule,
    ExportModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
