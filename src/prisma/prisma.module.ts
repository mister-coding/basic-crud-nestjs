import { Global, Module } from '@nestjs/common';
import { PrismaService, PrismaServiceMongo } from './prisma.service';

@Global()
@Module({
  providers: [PrismaService,PrismaServiceMongo],
  exports:[PrismaService,PrismaServiceMongo]
})
export class PrismaModule {}
