import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BiodataModule } from './crud/biodata/biodata.module';
import { BiodataMongoModule } from './crud/biodata-mongo/biodata-mongo.module';

@Module({
  imports: [UserModule, PrismaModule, BiodataModule, BiodataMongoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
