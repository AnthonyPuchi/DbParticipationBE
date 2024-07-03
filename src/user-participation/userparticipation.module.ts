import { Module } from '@nestjs/common';
import { UserParticipationService } from './userparticipation.service';
import { UserParticipationController } from './userparticipation.controller';
import { PrismaModule } from "../prisma/prisma.module";

@Module({
  imports: [PrismaModule],
  controllers: [UserParticipationController],
  providers: [UserParticipationService]
})
export class UserParticipationModule {}
