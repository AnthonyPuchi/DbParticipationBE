import { Injectable } from '@nestjs/common';
import { CreateTranscriptionDto } from './dto/create-transcription.dto';
import { UpdateTranscriptionDto } from './dto/update-transcription.dto';
import { Transcription } from '@prisma/client';
import { BaseService } from 'src/prisma/prisma.base.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TranscriptionsService extends BaseService< 
Transcription, 
CreateTranscriptionDto, UpdateTranscriptionDto> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'transcription' });
  }
}
