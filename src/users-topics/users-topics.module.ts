import { Module } from '@nestjs/common';
import { UsersTopicsService } from './users-topics.service';
import { UsersTopicsController } from './users-topics.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersTopicsController],
  providers: [UsersTopicsService],
  imports: [PrismaModule],
})
export class UsersTopicsModule {}
