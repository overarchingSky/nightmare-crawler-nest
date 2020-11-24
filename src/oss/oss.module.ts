import { Module } from '@nestjs/common';
import { OssService } from './oss.service';
import { OssController } from './oss.controller';

@Module({
  providers: [OssService],
  exports: [OssService],
  controllers: [OssController],
})
export class OssModule {}
