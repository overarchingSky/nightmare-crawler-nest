import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { jwtConstants } from './constants';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        imports:[
            PassportModule.register({ defaultStrategy: 'jwt' }),
            JwtModule.register({
                secret: jwtConstants.secret,
                //60s登录过期时间
                signOptions: { expiresIn: jwtConstants.expiresIn },
              }),
              
        ],
      providers: [AuthService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
