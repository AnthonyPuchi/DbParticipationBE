import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { userController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [userController],
  providers: [UsersService],
  imports: [PrismaModule],
})
export class UsersModule {}
