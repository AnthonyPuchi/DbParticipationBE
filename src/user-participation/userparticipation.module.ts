import { Module } from '@nestjs/common';
import { UserParticipationService } from './userparticipation.service';
import { UserParticipationController } from './userparticipation.controller';
import { PrismaModule } from "../prisma/prisma.module";
import { MessageAnalysisService } from '../config/messageAnalysis.service';
import { ParticipationModule } from '../participation/participation.module';
@Module({
  imports: [PrismaModule, ParticipationModule],
  controllers: [UserParticipationController],
  providers: [UserParticipationService, MessageAnalysisService]
})
export class UserParticipationModule {}
