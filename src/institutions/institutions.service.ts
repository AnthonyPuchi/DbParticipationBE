import { Injectable } from '@nestjs/common';
import { CreateInstitutionDto } from './dto/create-institution.dto';
import { UpdateInstitutionDto } from './dto/update-institution.dto';
import { BaseService } from 'src/prisma/prisma.base.service';
import { Institution } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class InstitutionsService extends BaseService<
  Institution,
  CreateInstitutionDto,
  UpdateInstitutionDto>{
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'institution' });
  }
}
