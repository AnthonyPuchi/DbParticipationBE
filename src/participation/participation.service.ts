import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from 'src/prisma/prisma.service';
import { UserTopic } from "@prisma/client";

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

    async incrementParticipationCount(userId: string, topicId: string) {
        const userTopic = await this.prisma.userTopic.findUnique({
            where: { userId_topicId: { userId, topicId } },
            include: { userParticipations: true },
        });

        if (!userTopic) {
            throw new Error('UserTopic not found');
        }

        const updatedUserTopic = await this.prisma.userTopic.update({
            where: { userId_topicId: { userId, topicId } },
            data: { participationCount: { increment: 1 } },
        });

        return updatedUserTopic;
    }

    async deleteUserParticipation(userId: string, topicId: string): Promise<UserTopic> {
        // Verificar si la participación del usuario en el tema existe
        const existingUserTopic = await this.prisma.userTopic.findUnique({
            where: { userId_topicId: { userId, topicId } },
        });

        if (!existingUserTopic) {
            throw new NotFoundException(`User with ID ${userId} is not participating in topic with ID ${topicId}`);
        }

        // Eliminar la participación del usuario en el tema
        const deletedUserTopic = await this.prisma.userTopic.delete({
            where: { userId_topicId: { userId, topicId } },
        });

        return deletedUserTopic;
    }
}
