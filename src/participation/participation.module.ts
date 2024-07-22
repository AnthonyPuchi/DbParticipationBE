import { Module } from '@nestjs/common';
import { ParticipationService } from './participation.service';
import { ParticipationController } from './participation.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
    providers: [ParticipationService, PrismaService],
    controllers: [ParticipationController],
    exports: [ParticipationService],
})
export class ParticipationModule {}
