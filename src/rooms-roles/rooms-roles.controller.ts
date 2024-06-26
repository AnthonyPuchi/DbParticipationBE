import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoomsRolesService } from './rooms-roles.service';
import { CreateRoomRoleDto } from './dto/create-rooms-role.dto';
import { UpdateRoomRoleDto } from './dto/update-rooms-role.dto';

@Controller('rooms-roles')
export class RoomsRolesController {
  constructor(private readonly roomsRolesService: RoomsRolesService) {}

  @Post()
  create(@Body() createRoomRoleDto: CreateRoomRoleDto) {
    return this.roomsRolesService.create(createRoomRoleDto);
  }

  @Get()
  findAll() {
    return this.roomsRolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roomsRolesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoomRoleDto: UpdateRoomRoleDto) {
    return this.roomsRolesService.update(id, updateRoomRoleDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roomsRolesService.remove(id);
  }
}
