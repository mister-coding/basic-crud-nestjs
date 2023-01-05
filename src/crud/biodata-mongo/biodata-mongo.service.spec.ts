import { Test, TestingModule } from '@nestjs/testing';
import { BiodataMongoService } from './biodata-mongo.service';

describe('BiodataMongoService', () => {
  let service: BiodataMongoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BiodataMongoService],
    }).compile();

    service = module.get<BiodataMongoService>(BiodataMongoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
