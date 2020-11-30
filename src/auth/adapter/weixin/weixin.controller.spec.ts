import { Test, TestingModule } from '@nestjs/testing';
import { WeixinController } from './weixin.controller';
import { WeixinService } from './weixin.service';

describe('WeixinController', () => {
  let controller: WeixinController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
        providers:[WeixinService],
      controllers: [WeixinController],
    }).compile();

    controller = module.get<WeixinController>(WeixinController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
