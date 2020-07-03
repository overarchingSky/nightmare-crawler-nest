import { Module } from '@nestjs/common';
import { ProductReleaseController } from './product-release.controller';
import { ProductReleaseService } from './product-release.service';

@Module({
  controllers: [ProductReleaseController],
  providers: [ProductReleaseService]
})
export class ProductReleaseModule {}
