import { Module } from '@nestjs/common';
import { UserCareersService } from './user-careers.service';
import { UserCareersController } from './user-careers.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UserCareersController],
  providers: [UserCareersService],
  imports: [PrismaModule],
})
export class UserCareersModule {}
