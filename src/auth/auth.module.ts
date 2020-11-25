import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AccountModule } from '../account/account.module';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { PersonalInfomationModule } from 'src/personal-information/personal-infomation.module';
import { WeixinModule } from './adapter/weixin/weixin.module';

@Module({
  imports: [
    AccountModule,
    PersonalInfomationModule,
    // 默认使用jwt策略
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      //60s登录过期时间
      signOptions: { expiresIn: jwtConstants.expiresIn },
    }),
    // 适配器
    /**
     * 微信
     */
    WeixinModule,
  ],
  providers: [AuthService, /*AccountModule,*/ LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
