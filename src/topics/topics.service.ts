import { Injectable } from '@nestjs/common';
import { CreateTopicDto } from './dto/create-topic.dto';
import { UpdateTopicDto } from './dto/update-topic.dto';
import { Topic } from '@prisma/client';
import { BaseService } from 'src/prisma/prisma.base.service';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class TopicsService extends BaseService<
  Topic,
  CreateTopicDto,
  UpdateTopicDto>{
 constructor(private prismaService: PrismaService) {
   super(prismaService, { name: 'topic' });
 }
}
