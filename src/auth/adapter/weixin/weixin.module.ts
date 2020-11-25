import { HttpModule, Module } from '@nestjs/common';
import { WeixinService } from './weixin.service';
import { WeixinController } from './weixin.controller';
import { AccountModule } from 'src/account/account.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'src/auth/constants';
import { WeixinStrategy } from './weixin.strategy';

@Module({
  imports:[
    JwtModule.register({
        secret: jwtConstants.secret,
        //60s登录过期时间
        signOptions: { expiresIn: jwtConstants.expiresIn },
      }),
      HttpModule,
      AccountModule
    ],
  providers: [WeixinService,WeixinStrategy],
  controllers: [WeixinController]
})
export class WeixinModule {}
