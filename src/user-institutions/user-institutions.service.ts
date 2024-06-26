import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserInstitutionDto } from './dto/create-user-institution.dto';
import { UpdateUserInstitutionDto } from './dto/update-user-institution.dto';

@Injectable()
export class UserInstitutionService {
  constructor(private prisma: PrismaService) {}

  create(createUserInstitutionDto: CreateUserInstitutionDto) {
    return this.prisma.userInstitution.create({ data: createUserInstitutionDto });
  }

  findAll() {
    return this.prisma.userInstitution.findMany();
  }

  findOne(userId: string, institutionId: string) {
    return this.prisma.userInstitution.findUnique({
      where: { userId_institutionId: { userId, institutionId } },
    });
  }

  update(userId: string, institutionId: string, updateUserInstitutionDto: UpdateUserInstitutionDto) {
    return this.prisma.userInstitution.update({
      where: { userId_institutionId: { userId, institutionId } },
      data: updateUserInstitutionDto,
    });
  }

  remove(userId: string, institutionId: string) {
    return this.prisma.userInstitution.delete({
      where: { userId_institutionId: { userId, institutionId } },
    });
  }
}
