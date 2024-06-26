import { Injectable } from '@nestjs/common';
import { CreateStudentProfileDto } from './dto/create-students-profile.dto';
import { UpdateStudentProfileDto } from './dto/update-students-profile.dto';
import { BaseService } from 'src/prisma/prisma.base.service';
import { StudentProfile } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class StudentsProfilesService extends BaseService<
  StudentProfile,
  CreateStudentProfileDto,
  UpdateStudentProfileDto>{
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'studentProfile' });
  }
}
