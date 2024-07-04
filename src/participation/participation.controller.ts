import { Controller, Get, Param, Patch, Body, NotFoundException, Delete } from "@nestjs/common";
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

    @Patch('increment-participation')
    async incrementParticipationCount(@Body('userId') userId: string, @Body('topicId') topicId: string) {
        return this.participationService.incrementParticipationCount(userId, topicId);
    }

    @Delete(':userId/:topicId')
    async deleteUserParticipation(
      @Param('userId') userId: string,
      @Param('topicId') topicId: string,
    ) {
        try {
            const deletedUserTopic = await this.participationService.deleteUserParticipation(userId, topicId);
            return { message: 'User participation deleted successfully', deletedUserTopic };
        } catch (error) {
            if (error instanceof NotFoundException) {
                throw new NotFoundException(error.message);
            }
            throw error; // Cualquier otro tipo de error se propaga
        }
    }
}
