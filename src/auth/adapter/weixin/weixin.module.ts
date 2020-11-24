import { HttpModule, Module } from '@nestjs/common';
import { WeixinService } from './weixin.service';
import { WeixinController } from './weixin.controller';

@Module({
  imports:[HttpModule],
  providers: [WeixinService],
  controllers: [WeixinController]
})
export class WeixinModule {}
