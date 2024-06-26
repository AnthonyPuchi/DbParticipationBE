import { Injectable } from '@nestjs/common';
import { CreateRoomRoleDto } from './dto/create-rooms-role.dto';
import { UpdateRoomRoleDto } from './dto/update-rooms-role.dto';
import { BaseService } from 'src/prisma/prisma.base.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { RoomRole } from '@prisma/client';

@Injectable()
export class RoomsRolesService extends BaseService< RoomRole, CreateRoomRoleDto, UpdateRoomRoleDto>{
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'roomRole' });
  }
}
