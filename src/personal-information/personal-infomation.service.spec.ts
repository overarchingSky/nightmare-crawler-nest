import { Test, TestingModule } from '@nestjs/testing';
import { PersonalInfomationService } from './personal-infomation.service';
import { PersonalInfomation } from './schemas/personal-infomation.schemas';

describe('PersonalInfomationService', () => {
  let service: PersonalInfomationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PersonalInfomationService,PersonalInfomation],
    }).compile();

    service = module.get<PersonalInfomationService>(PersonalInfomationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
