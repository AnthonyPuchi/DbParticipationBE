import { Injectable } from '@nestjs/common';
import { CreateUserTopicDto } from './dto/create-users-topic.dto';
import { UpdateUserTopicDto } from './dto/update-users-topic.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersTopicsService {
  constructor(private prisma: PrismaService) {}

  create(createUserTopicDto: CreateUserTopicDto) {
    return this.prisma.userTopic.create({data: createUserTopicDto});
  }

  findAll() {
    return this.prisma.userTopic.findMany();
  }

  findOne(userId: string, topicId: string) {
    return this.prisma.userTopic.findUnique({where: {userId_topicId: {userId, topicId}}});
  }

  update(userId: string, topicId: string , updateUsersTopicDto: UpdateUserTopicDto) {
    return this.prisma.userTopic.update({where: {userId_topicId: {userId, topicId}}, data: updateUsersTopicDto});
  }

  remove(userId: string, topicId: string) {
    return this.prisma.userTopic.delete({where: {userId_topicId: {userId, topicId}}});
  }
}
