import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserTopicDto } from './dto/create-users-topic.dto';
import { UpdateUserTopicDto } from './dto/update-users-topic.dto';

@Injectable()
export class UsersTopicsService {
  constructor(private prisma: PrismaService) {}

  async create(createUserTopicDto: CreateUserTopicDto) {
    try {
      return await this.prisma.userTopic.create({ data: createUserTopicDto });
    } catch (error) {
      throw new Error(`Failed to create UserTopic: ${error.message}`);
    }
  }

  async findAll() {
    return await this.prisma.userTopic.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.userTopic.findUnique({ where: { id } });
  }

  async findUserTopic(userId: string, topicId: string) {
    return this.prisma.userTopic.findFirst({
      where: {
        userId: userId,
        topicId: topicId,
      },
    });
  }

  async findUserTopicsByUserId(userId: string) {
    return await this.prisma.userTopic.findMany({
      where: { userId },
    });
  }

  async findUserTopicsByTopicId(topicId: string) {
    return await this.prisma.userTopic.findMany({
      where: { topicId },
    });
  }

  async update(id: string, updateUserTopicDto: UpdateUserTopicDto) {
    try {
      return await this.prisma.userTopic.update({ where: { id }, data: updateUserTopicDto });
    } catch (error) {
      throw new Error(`Failed to update UserTopic: ${error.message}`);
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.userTopic.delete({ where: { id } });
    } catch (error) {
      throw new Error(`Failed to delete UserTopic: ${error.message}`);
    }
  }

  async incrementParticipantCount(userTopicId: string) {
    try {
      return await this.prisma.userTopic.update({
        where: { id: userTopicId },
        data: {
          participationCount: {
            increment: 1,
          },
        },
      });
    } catch (error) {
      throw new Error(`Failed to increment participant count: ${error.message}`);
    }
  }
}
