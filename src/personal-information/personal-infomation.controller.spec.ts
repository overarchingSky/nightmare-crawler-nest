import { Test, TestingModule } from '@nestjs/testing';
import { PersonalInfomationController } from './personal-infomation.controller';

describe('personal-infomation Controller', () => {
  let controller: PersonalInfomationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PersonalInfomationController],
    }).compile();

    controller = module.get<PersonalInfomationController>(PersonalInfomationController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
