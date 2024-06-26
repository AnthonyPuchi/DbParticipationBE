import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersRolesService } from './users-roles.service';
import { CreateUserRoleDto } from './dto/create-users-role.dto';
import { UpdateUserRoleDto } from './dto/update-users-role.dto';

@Controller('users-roles')
export class UsersRolesController {
  constructor(private readonly usersRolesService: UsersRolesService) {}

  @Post()
  create(@Body() createUserRoleDto: CreateUserRoleDto) {
    return this.usersRolesService.create(createUserRoleDto);
  }

  @Get()
  findAll() {
    return this.usersRolesService.findAll();
  }

  @Get(':userId/:roleId')
  findOne(@Param('userId') userId: string, @Param('roleId') roleId: string){
    return this.usersRolesService.findOne(userId, roleId);
  }

  @Patch(':userId/:roleId')
  update(@Param('userId') userId: string, @Param('roleId') roleId: string, @Body() updateUserRoleDto: UpdateUserRoleDto) {
    return this.usersRolesService.update(userId, roleId, updateUserRoleDto);
  }

  @Delete(':userId/:roleId')
  remove(@Param('userId') userId: string, @Param('roleId') roleId: string) {
    return this.usersRolesService.remove(userId, roleId);
  }
}
