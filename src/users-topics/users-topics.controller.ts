import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersTopicsService } from './users-topics.service';
import { CreateUserTopicDto } from './dto/create-users-topic.dto';
import { UpdateUserTopicDto } from './dto/update-users-topic.dto';

@Controller('users-topics')
export class UsersTopicsController {
  constructor(private readonly usersTopicsService: UsersTopicsService) {}

  @Post()
  create(@Body() createUserTopicDto: CreateUserTopicDto) {
    return this.usersTopicsService.create(createUserTopicDto);
  }

  @Get()
  findAll() {
    return this.usersTopicsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersTopicsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserTopicDto: UpdateUserTopicDto) {
    return this.usersTopicsService.update(id, updateUserTopicDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersTopicsService.remove(id);
  }
}
