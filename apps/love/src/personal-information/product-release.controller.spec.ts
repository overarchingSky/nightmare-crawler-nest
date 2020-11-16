import { Test, TestingModule } from '@nestjs/testing';
import { ProductReleaseController } from './product-release.controller';

describe('ProductRelease Controller', () => {
  let controller: ProductReleaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductReleaseController],
    }).compile();

    controller = module.get<ProductReleaseController>(ProductReleaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
