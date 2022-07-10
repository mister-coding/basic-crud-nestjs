import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BiodataModule } from './crud/biodata/biodata.module';

@Module({
  imports: [UserModule, PrismaModule, BiodataModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
