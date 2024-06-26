import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ParticipationService {
    constructor(private prisma: PrismaService) {}

    async getTotalParticipation(topicId: string) {
        const totalParticipation = await this.prisma.userTopic.aggregate({
            _sum: {
                participationCount: true,
            },
            where: {
                topicId,
            },
        });

        return { totalParticipation: totalParticipation._sum.participationCount || 0 };
    }

    async listNotParticipated(topicId: string) {
        const participatingUserIds = await this.prisma.userTopic.findMany({
            where: { topicId },
            select: { userId: true },
        });

        const participatingUserIdSet = new Set(participatingUserIds.map(user => user.userId));

        const notParticipatedUsers = await this.prisma.user.findMany({
            where: {
                id: { notIn: Array.from(participatingUserIdSet) },
            },
        });

        return notParticipatedUsers;
    }

    async getTopicParticipationCount(topicId: string) {
        const participationCounts = await this.prisma.userTopic.findMany({
            where: { topicId },
            include: {
                user: {
                    select: {
                        id: true,
                        sex: true,
                    },
                },
            },
        });

        return participationCounts.map(userTopic => ({
            userId: userTopic.userId,
            topicId: userTopic.topicId,
            participationCount: userTopic.participationCount,
            createdAt: userTopic.createdAt,
            updatedAt: userTopic.updatedAt,
            sex: userTopic.user.sex,
        }));
    }
}
