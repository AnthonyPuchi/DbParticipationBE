import { Injectable } from '@nestjs/common';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseService } from 'src/prisma/prisma.base.service';
import { Career } from '@prisma/client';

@Injectable()
export class CareersService extends BaseService<
  Career,
  CreateCareerDto,
  UpdateCareerDto>{
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'career' });
  } }


