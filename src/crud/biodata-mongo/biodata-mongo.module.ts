import { Module } from '@nestjs/common';
import { BiodataMongoService } from './biodata-mongo.service';
import { BiodataMongoController } from './biodata-mongo.controller';

@Module({
  controllers: [BiodataMongoController],
  providers: [BiodataMongoService]
})
export class BiodataMongoModule {}
