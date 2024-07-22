import { Controller, Get, NotFoundException, Param, Patch } from "@nestjs/common";
import { ParticipationService } from './participation.service';
import { User } from "@prisma/client";

@Controller('participation')
export class ParticipationController {
    constructor(private readonly participationService: ParticipationService) {}

    @Get('topic/total-participation/:topicId')
    async getTotalParticipation(@Param('topicId') topicId: string) {
        return this.participationService.getTotalParticipation(topicId);
    }

    @Get('topic/list-not-participation/:topicId')
    async listNotParticipated(@Param('topicId') topicId: string) {
        return this.participationService.listNotParticipated(topicId);
    }

    @Get('topic/participation-count/:topicId')
    async getTopicParticipationCount(@Param('topicId') topicId: string) {
        return this.participationService.getTopicParticipationCount(topicId);
    }

    @Patch('/increment-participation/:userId/:topicId')
    async incrementParticipationCount(
      @Param('userId') userId: string,
      @Param('topicId') topicId: string,
    ) {
        try {
            await this.participationService.incrementParticipationCount(userId, topicId);
            return { message: 'Participation count incremented successfully' };
        } catch (error) {
            throw new NotFoundException(`Failed to increment participation count: ${error.message}`);
        }
    }

    @Get('topic/list-not-participated-criteria/:topicId')
    async listNotParticipatedByCriteria(@Param('topicId') topicId: string) {
        return this.participationService.listStudentsNotParticipatedByCriteria(topicId);
    }

    @Get('participants/:topicId')
    async listParticipants(@Param('topicId') topicId: string) {
        return this.participationService.listParticipants(topicId);
    }
}
