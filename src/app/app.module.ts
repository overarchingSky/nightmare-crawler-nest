import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
//import { ProductReleaseModule } from '../personal-information/product-release.module';
import { AuthModule } from '../auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountModule } from '../account/account.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), AuthModule, AccountModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
