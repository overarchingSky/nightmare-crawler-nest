import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CrawlerModule } from '../crawler/crawler.module';
import { ProductReleaseModule } from '../product-release/product-release.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [CrawlerModule, ProductReleaseModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
