import { Test, TestingModule } from '@nestjs/testing';
import { ProductReleaseService } from './product-release.service';

describe('ProductReleaseService', () => {
  let service: ProductReleaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductReleaseService],
    }).compile();

    service = module.get<ProductReleaseService>(ProductReleaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
