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

  @Get(':userId/:topicId')
  findOne(@Param('userId') userId: string, @Param('topicId') topicId: string){
    return this.usersTopicsService.findOne(userId, topicId);
  }

  @Patch(':userId/:topicId')
  update(@Param('userId') userId: string, @Param('topicId') topicId: string, @Body() updateUserTopicDto: UpdateUserTopicDto) {
    return this.usersTopicsService.update(userId, topicId, updateUserTopicDto);
  }

  @Delete(':userId/:topicId')
  remove(@Param('userId') userId: string, @Param('topicId') topicId: string){
    return this.usersTopicsService.remove(userId, topicId);
  }
}
