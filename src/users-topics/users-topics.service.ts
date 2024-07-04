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
    return this.prisma.userTopic.findMany();
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
    return this.prisma.userTopic.findMany({
      where: { userId },
    });
  }

  async findUserTopicsByTopicId(topicId: string) {
    return this.prisma.userTopic.findMany({
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
      // Obtener el conteo actual de participaciones
      const userTopic = await this.prisma.userTopic.findUnique({
        where: { id: userTopicId },
      });

      if (!userTopic) {
        throw new Error(`UserTopic with id ${userTopicId} not found`);
      }

      // Obtener todas las participaciones asociadas a este userTopic
      const participations = await this.prisma.userParticipation.findMany({
        where: { userTopicId },
      });

      // Calcular el nuevo conteo de participaciones
      const newCount = participations.length;

      // Actualizar el conteo de participaciones en la base de datos
      return await this.prisma.userTopic.update({
        where: { id: userTopicId },
        data: { participationCount: newCount },
      });
    } catch (error) {
      throw new Error(`Failed to increment participant count: ${error.message}`);
    }
  }
}
