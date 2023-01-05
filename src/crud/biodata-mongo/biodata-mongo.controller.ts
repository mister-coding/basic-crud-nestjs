import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BiodataMongoService } from './biodata-mongo.service';
import { CreateBiodataMongoDto } from './dto/create-biodata-mongo.dto';
import { UpdateBiodataMongoDto } from './dto/update-biodata-mongo.dto';

@Controller('biodata-mongo')
export class BiodataMongoController {
  constructor(private readonly biodataMongoService: BiodataMongoService) {}

  @Post()
  create(@Body() createBiodataMongoDto: CreateBiodataMongoDto) {
    return this.biodataMongoService.create(createBiodataMongoDto);
  }

  @Get()
  findAll() {
    return this.biodataMongoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.biodataMongoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBiodataMongoDto: UpdateBiodataMongoDto) {
    return this.biodataMongoService.update(+id, updateBiodataMongoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.biodataMongoService.remove(+id);
  }
}
