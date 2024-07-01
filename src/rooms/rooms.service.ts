import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from '@prisma/client';
import { BaseService } from 'src/prisma/prisma.base.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RoomsService extends BaseService<
  Room,
  CreateRoomDto,
  UpdateRoomDto
> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'room' });
  }
}
