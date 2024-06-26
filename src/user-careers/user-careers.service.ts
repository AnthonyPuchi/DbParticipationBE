import { Injectable } from '@nestjs/common';
import { CreateUserCareerDto } from './dto/create-user-career.dto';
import { UpdateUserCareerDto } from './dto/update-user-career.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserCareersService {
  constructor(private prisma: PrismaService) {}

  create(createUserCareerDto: CreateUserCareerDto) {
    return this.prisma.userCareer.create({ data: createUserCareerDto });
  }

  findAll() {
    return this.prisma.userCareer.findMany();
  }

  findOne(userId: string, careerId: string) {
    return this.prisma.userCareer.findUnique({ where: { userId_careerId: { userId, careerId } } });
  }

  update(userId: string, careerId: string, updateUserCareerDto: UpdateUserCareerDto) {
    return this.prisma.userCareer.update({ where: { userId_careerId: { userId, careerId } }, data: updateUserCareerDto });
  }

  remove(userId: string, careerId: string) {
    return this.prisma.userCareer.delete({ where: { userId_careerId: { userId, careerId } } });
  }
}
