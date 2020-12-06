import { Test, TestingModule } from '@nestjs/testing';
import { PersonalInfomationController } from './personal-infomation.controller';
import { PersonalInfomationService } from './personal-infomation.service';

describe('personal-infomation Controller', () => {
  let controller: PersonalInfomationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        providers:[PersonalInfomationService],
      controllers: [PersonalInfomationController],
    }).compile();

    controller = module.get<PersonalInfomationController>(
      PersonalInfomationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
