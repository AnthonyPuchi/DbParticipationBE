import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
  InternalServerErrorException
} from "@nestjs/common";
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

  @Get('user/:userId/topic/:topicId')
  async getUserTopic(
    @Param('userId') userId: string,
    @Param('topicId') topicId: string
  ) {
    const userTopic = await this.usersTopicsService.findUserTopic(userId, topicId);
    if (!userTopic) {
      throw new NotFoundException(`UserTopic with userId ${userId} and topicId ${topicId} not found`);
    }
    return userTopic;
  }

  @Post('increment/:userTopicId')
  async incrementParticipantCount(@Param('userTopicId') userTopicId: string) {
    try {
      return await this.usersTopicsService.incrementParticipantCount(userTopicId);
    } catch (error) {
      console.error('Error incrementing participant count:', error);
      throw new InternalServerErrorException('Failed to increment participant count');
    }
  }

  @Get('user/:userId')
  async findUserTopicsByUserId(@Param('userId') userId: string) {
    try {
      const userTopics = await this.usersTopicsService.findUserTopicsByUserId(userId);
      return { userTopics };
    } catch (error) {
      return { message: 'Failed to find UserTopics by userId', error: error.message };
    }
  }

  @Get('topic/:topicId')
  async findUserTopicsByTopicId(@Param('topicId') topicId: string) {
    try {
      const userTopics = await this.usersTopicsService.findUserTopicsByTopicId(topicId);
      return { userTopics };
    } catch (error) {
      return { message: 'Failed to find UserTopics by topicId', error: error.message };
    }
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
