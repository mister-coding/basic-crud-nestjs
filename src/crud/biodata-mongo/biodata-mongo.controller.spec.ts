import { Test, TestingModule } from '@nestjs/testing';
import { BiodataMongoController } from './biodata-mongo.controller';
import { BiodataMongoService } from './biodata-mongo.service';

describe('BiodataMongoController', () => {
  let controller: BiodataMongoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BiodataMongoController],
      providers: [BiodataMongoService],
    }).compile();

    controller = module.get<BiodataMongoController>(BiodataMongoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
