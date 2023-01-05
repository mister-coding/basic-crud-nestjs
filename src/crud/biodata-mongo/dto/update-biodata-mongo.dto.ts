import { PartialType } from '@nestjs/mapped-types';
import { CreateBiodataMongoDto } from './create-biodata-mongo.dto';

export class UpdateBiodataMongoDto extends PartialType(CreateBiodataMongoDto) {}
