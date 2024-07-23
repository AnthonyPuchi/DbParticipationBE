import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserParticipation } from '@prisma/client';
import { MessageAnalysisService } from '../config/messageAnalysis.service';
import { ParticipationService } from '../participation/participation.service';

@Injectable()
export class UserParticipationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly messageAnalysisService: MessageAnalysisService,
    private readonly participationService: ParticipationService,
  ) {}

  async create(data: any): Promise<any> {
    const userTopic = await this.prisma.userTopic.findUnique({
      where: { id: data.userTopicId },
      include: { user: true },
    });

    if (!userTopic) {
      throw new NotFoundException(`UserTopic with ID ${data.userTopicId} not found`);
    }

    const lastUser = `${userTopic.user.firstName} ${userTopic.user.lastName}`;

    const messageWithSender = {
      ...data,
      sender: lastUser,
    };

    const userParticipation = await this.prisma.userParticipation.create({ data: messageWithSender });

    const allParticipations = await this.prisma.userParticipation.findMany({
      where: { userTopic: { topicId: data.topicId } },
      include: {
        userTopic: {
          include: {
            user: true,
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    const totalParticipationCount = allParticipations.length;

    if (totalParticipationCount % 10 === 0) {
      const messages = allParticipations.slice(-10).map(up => up.message);

      const analysisResults = await this.messageAnalysisService.analyzeMessages(messages, lastUser);
      console.log('Analysis Results:', analysisResults);

      const noAportaMessages = analysisResults.filter(result => result.includes('no está aportando nada nuevo a la discusión'));
      if (noAportaMessages.length > 0) {
        throw new BadRequestException(`Análisis: ${noAportaMessages.join(', ')}`);
      }
    }

    return {
      userParticipation,
    };
  }

  async findAll(): Promise<UserParticipation[]> {
    return this.prisma.userParticipation.findMany();
  }

  async findOne(id: string): Promise<UserParticipation | null> {
    const userParticipation = await this.prisma.userParticipation.findUnique({ where: { id } });
    if (!userParticipation) {
      throw new NotFoundException(`User participation with ID ${id} not found`);
    }
    return userParticipation;
  }

  async findByTopicId(topicId: string): Promise<UserParticipation[]> {
    return this.prisma.userParticipation.findMany({
      where: {
        userTopic: {
          topicId,
        },
      },
      include: {
        userTopic: {
          include: {
            user: true,
          },
        },
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  }

  async update(id: string, data: any): Promise<UserParticipation> {
    const updatedUserParticipation = await this.prisma.userParticipation.update({
      where: { id },
      data,
    });
    if (!updatedUserParticipation) {
      throw new NotFoundException(`User participation with ID ${id} not found`);
    }
    return updatedUserParticipation;
  }

  async remove(id: string): Promise<UserParticipation> {
    const deletedUserParticipation = await this.prisma.userParticipation.delete({ where: { id } });
    if (!deletedUserParticipation) {
      throw new NotFoundException(`User participation with ID ${id} not found`);
    }
    return deletedUserParticipation;
  }
}
