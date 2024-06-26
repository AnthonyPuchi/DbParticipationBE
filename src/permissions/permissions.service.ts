import { Injectable } from '@nestjs/common';
import { CreatePermissionDto } from './dto/create-permission.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { BaseService } from 'src/prisma/prisma.base.service';
import { Permission } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PermissionsService extends BaseService<
  Permission,
  CreatePermissionDto,
  UpdatePermissionDto>{
 constructor(private prismaService: PrismaService) {
   super(prismaService, { name: 'permission' });
 }
}
