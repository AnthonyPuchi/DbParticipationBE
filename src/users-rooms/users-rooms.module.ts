import { Module } from '@nestjs/common';
import { UsersRoomsService } from './users-rooms.service';
import { UsersRoomsController } from './users-rooms.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersRoomsController],
  providers: [UsersRoomsService],
  imports: [PrismaModule],
})
export class UsersRoomsModule {}
