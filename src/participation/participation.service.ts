import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '.prisma/client';

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
            where: { topicId, participationCount: 0 },
            select: { userId: true },
        });

        const participatingUserIdSet = new Set(participatingUserIds.map(user => user.userId));

        const notParticipatedUsers = await this.prisma.user.findMany({
            where: {
                id: { in: Array.from(participatingUserIdSet) },
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

    async incrementParticipationCount(userId: string, topicId: string) {
        try {
            const userTopic = await this.prisma.userTopic.findFirst({
                where: { userId, topicId },
            });

            if (userTopic) {
                await this.prisma.userTopic.update({
                    where: { id: userTopic.id },
                    data: {
                        participationCount: userTopic.participationCount + 1,
                    },
                });
            } else {
                await this.prisma.userTopic.create({
                    data: {
                        userId,
                        topicId,
                        participationCount: 1,
                    },
                });
            }
        } catch (error) {
            throw new Error(`Failed to increment participation count: ${error.message}`);
        }
    }

    async listStudentsNotParticipatedByCriteria(topicId: string) {
        const participatingUserIds = await this.prisma.userTopic.findMany({
            where: { topicId, participationCount: { gt: 0 } },
            select: { userId: true },
        });

        const participatingUserIdSet = new Set(participatingUserIds.map(user => user.userId));

        const notParticipatedUsers = await this.prisma.user.findMany({
            where: {
                id: { notIn: Array.from(participatingUserIdSet) },
                studentProfile: {
                    NOT: {
                        OR: [
                            { grades: { gte: 70 } },
                            {AND: [
                                    { user: { sex: "Male" } },
                                    { grades: { gte: 70 }  },
                                ] },
                        ],
                    },
                },
            },
            include: {
                studentProfile: true,
            },
            orderBy: {
                studentProfile: {
                    grades: 'asc',
                },
            },
        });

        return notParticipatedUsers;
    }

    async listParticipants(topicId: string) {
        const participants = await this.prisma.userTopic.findMany({
            where: { topicId },
            include: {
                user: true,
            },
        });

        return participants.map(pt => ({
            firstName: pt.user.firstName,
            lastName: pt.user.lastName,
            email: pt.user.institutionalEmail,
        }));
    }
}