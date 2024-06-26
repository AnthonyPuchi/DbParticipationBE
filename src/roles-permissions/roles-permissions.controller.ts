import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RolesPermissionsService } from './roles-permissions.service';
import { CreateRolePermissionDto } from './dto/create-roles-permission.dto';
import { UpdateRolePermissionDto } from './dto/update-roles-permission.dto';

@Controller('roles-permissions')
export class RolesPermissionsController {
  constructor(private readonly rolesPermissionsService: RolesPermissionsService) {}

  @Post()
  create(@Body() createRolePermissionDto: CreateRolePermissionDto) {
    return this.rolesPermissionsService.create(createRolePermissionDto);
  }

  @Get()
  findAll() {
    return this.rolesPermissionsService.findAll();
  }

  @Get(':roleid/:permissionId')
  findOne(@Param('roleId') roleId: string, @Param('permissionId') permissionId: string){
    return this.rolesPermissionsService.findOne(roleId, permissionId);
  }

  @Patch(':roleid/:permissionId')
  update(@Param('roleId') roleId: string, @Param('permissionId') permissionId: string, @Body() updateRolesPermissionDto: UpdateRolePermissionDto) {
    return this.rolesPermissionsService.update(roleId,permissionId,updateRolesPermissionDto);
  }

  @Delete(':roleid/:permissionId')
  remove(@Param('roleId') roleId: string, @Param('permissionId') permissionId: string) {
    return this.rolesPermissionsService.remove(roleId, permissionId);
  }
}
