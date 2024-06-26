import { Injectable } from '@nestjs/common';
import { CreateRolePermissionDto } from './dto/create-roles-permission.dto';
import { UpdateRolePermissionDto } from './dto/update-roles-permission.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RolesPermissionsService {
  constructor(private prisma: PrismaService) {}

  create(createRolePermissionDto: CreateRolePermissionDto) {
    return this.prisma.rolePermission.create({data: createRolePermissionDto});
  }

  findAll() {
    return this.prisma.rolePermission.findMany();
  }

  findOne(roleId: string, permissionId: string ){
    return this.prisma.rolePermission.findUnique({where: {roleId_permissionId: {roleId, permissionId}}});
  }

  update(roleId: string, permissionId: string, updateRolePermissionDto: UpdateRolePermissionDto) {
    return this.prisma.rolePermission.update({where: {roleId_permissionId: {roleId, permissionId}}, data: updateRolePermissionDto});
  }

  remove(roleId: string, permissionId: string) {
    return this.prisma.rolePermission.delete({where: {roleId_permissionId: {roleId, permissionId}}});
  }
}
