import { Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Role } from '@prisma/client';
import { BaseService } from 'src/prisma/prisma.base.service';

@Injectable()
export class RolesService extends BaseService<
  Role,
  CreateRoleDto,
  UpdateRoleDto>{
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'role' });
  }
}
