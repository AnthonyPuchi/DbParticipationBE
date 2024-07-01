import { Module } from '@nestjs/common';
import { UserParticipationService } from './userparticipation.service';
import { UserParticipationController } from './userparticipation.controller';

@Module({
  controllers: [UserParticipationController],
  providers: [UserParticipationService]
})
export class UserParticipationModule {}
