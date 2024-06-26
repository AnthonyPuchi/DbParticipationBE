import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersRoomsService } from './users-rooms.service';
import { CreateUserRoomDto } from './dto/create-users-room.dto';
import { UpdateUserRoomDto } from './dto/update-users-room.dto';

@Controller('users-rooms')
export class UsersRoomsController {
  constructor(private readonly usersRoomsService: UsersRoomsService) {}

  @Post()
  create(@Body() createUserRoomDto: CreateUserRoomDto) {
    return this.usersRoomsService.create(createUserRoomDto);
  }

  @Get()
  findAll() {
    return this.usersRoomsService.findAll();
  }

  @Get(':userId/:roomId')
  findOne(@Param('userId') userId: string, @Param('roomId') roomId: string){
    return this.usersRoomsService.findOne(userId, roomId);
  }

  @Patch(':userId/:roomId')
  update(@Param('userId') userId: string, @Param('roomId') roomId: string, @Body() updateUserRoomDto: UpdateUserRoomDto) {
    return this.usersRoomsService.update(userId, roomId, updateUserRoomDto);
  }

  @Delete(':userId/:roomId')
  remove(@Param('userId') userId: string, @Param('roomId') roomId: string){
    return this.usersRoomsService.remove(userId, roomId);
  }
}
