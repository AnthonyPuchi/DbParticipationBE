import { Controller, Get, Param } from '@nestjs/common';
import { ParticipationService } from './participation.service';

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
}
