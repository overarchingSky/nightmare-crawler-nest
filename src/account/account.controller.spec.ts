import { Test, TestingModule } from '@nestjs/testing';
import { PersonalInfomationService } from 'src/personal-information/personal-infomation.service';
import { AccountController } from './account.controller';
import { AccountService } from './account.service';

describe('Account Controller', () => {
  let controller: AccountController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        providers:[AccountService,PersonalInfomationService],
      controllers: [AccountController],
    }).compile();

    controller = module.get<AccountController>(AccountController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
