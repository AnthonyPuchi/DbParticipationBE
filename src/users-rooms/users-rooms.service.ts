import { Injectable } from '@nestjs/common';
import { CreateUserRoomDto } from './dto/create-users-room.dto';
import { UpdateUserRoomDto } from './dto/update-users-room.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersRoomsService {
  constructor(private prisma: PrismaService) {}

  create(createUserRoomDto: CreateUserRoomDto) {
    return this.prisma.userRoom.create({ data: createUserRoomDto });
  }

  findAll() {
    return this.prisma.userRoom.findMany();
  }

  findOne(userId: string, roomId: string) {
    return this.prisma.userRoom.findUnique({ where: { userId_roomId: { userId, roomId } } });
  }

  update(userId: string, roomId: string, updateUserRoomDto: UpdateUserRoomDto) {
    return this.prisma.userRoom.update({ where: { userId_roomId: { userId, roomId } }, data: updateUserRoomDto });
  }

  remove(userId: string, roomId: string) {
    return this.prisma.userRoom.delete({ where: { userId_roomId: { userId, roomId } } });
  }
}
