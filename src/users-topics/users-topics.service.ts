import { Injectable } from '@nestjs/common';
import { CreateUserTopicDto } from './dto/create-users-topic.dto';
import { UpdateUserTopicDto } from './dto/update-users-topic.dto';
import { PrismaService } from 'src/prisma/prisma.service';

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
}
