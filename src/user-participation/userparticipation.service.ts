import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserParticipation } from '@prisma/client';
import { MessageAnalysisService } from '../config/messageAnalysis.service';

@Injectable()
export class UserParticipationService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly messageAnalysisService: MessageAnalysisService,
  ) {}

  async create(data: any): Promise<any> {
    const userParticipations = await this.prisma.userParticipation.findMany({
      where: { userTopicId: data.userTopicId },
      include: {
        userTopic: {
          include: {
            user: true,
          },
        },
      },
      orderBy: { createdAt: 'asc' },
    });

    let analysisResult = '';

    if ((userParticipations.length + 1) % 10 === 0) {
      const messages = userParticipations.map(up => up.message).concat(data.message);
      const usernames = userParticipations.map(up => `${up.userTopic.user.firstName} ${up.userTopic.user.lastName}`).concat(`${data.senderFirstName} ${data.senderLastName}`);

      for (let i = 0; i < messages.length; i++) {
        analysisResult = await this.messageAnalysisService.analyzeMessages(messages, usernames[i]);
        console.log('Analysis Result:', analysisResult); // Para depuración

        if (analysisResult.includes('no está aportando nada nuevo a la discusión')) {
          throw new BadRequestException(analysisResult);
        }
      }
    }

    const userTopic = await this.prisma.userTopic.findUnique({
      where: { id: data.userTopicId },
      include: { user: true },
    });

    if (!userTopic) {
      throw new NotFoundException(`UserTopic with ID ${data.userTopicId} not found`);
    }

    const messageWithSender = {
      ...data,
      sender: `${userTopic.user.firstName} ${userTopic.user.lastName}`,
    };

    const userParticipation = await this.prisma.userParticipation.create({ data: messageWithSender });

    return {
      userParticipation,
      analysisResult,
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
