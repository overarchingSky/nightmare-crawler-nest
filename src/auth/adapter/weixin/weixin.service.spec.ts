import { HttpModule } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { Test, TestingModule } from '@nestjs/testing';
import { AccountModule } from 'src/account/account.module';
import { jwtConstants } from 'src/auth/constants';
import { WeixinService } from './weixin.service';

describe('WeixinService', () => {
  let service: WeixinService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        imports:[
            JwtModule.register({
                secret: jwtConstants.secret,
                //60s登录过期时间
                signOptions: { expiresIn: jwtConstants.expiresIn },
              }),
              HttpModule,
              AccountModule
            ],
      providers: [WeixinService],
    }).compile();

    service = module.get<WeixinService>(WeixinService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
