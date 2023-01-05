import { Injectable } from '@nestjs/common';
import { PrismaServiceMongo } from 'src/prisma/prisma.service';
import { CreateBiodataMongoDto } from './dto/create-biodata-mongo.dto';
import { UpdateBiodataMongoDto } from './dto/update-biodata-mongo.dto';

@Injectable()
export class BiodataMongoService {
  constructor(private dbMongo: PrismaServiceMongo) {}

  async create(createBiodataMongoDto: CreateBiodataMongoDto) {
    const createBiodata = await this.dbMongo.biodata.create({
      data: createBiodataMongoDto,
    });
    if (createBiodata) {
      return {
        statusCode: 200,
        message: 'success',
      };
    }
  }

  findAll() {
    return `This action returns all biodataMongo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} biodataMongo`;
  }

  update(id: number, updateBiodataMongoDto: UpdateBiodataMongoDto) {
    return `This action updates a #${id} biodataMongo`;
  }

  remove(id: number) {
    return `This action removes a #${id} biodataMongo`;
  }
}
