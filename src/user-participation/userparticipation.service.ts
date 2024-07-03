import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserParticipationDto } from './dto/create-userparticipation.dto';
import { UpdateUserParticipationDto } from './dto/update-userparticipation.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserParticipation } from '@prisma/client';

@Injectable()
export class UserParticipationService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: CreateUserParticipationDto): Promise<UserParticipation> {
    return this.prisma.userParticipation.create({ data });
  }

  async findAll(): Promise<UserParticipation[]> {
    return this.prisma.userParticipation.findMany();
  }

  async findOne(id: string): Promise<UserParticipation | null> {
    const userParticipation = await this.prisma.userParticipation.findUnique({ where: { id } });
    if (!userParticipation) {
      throw new NotFoundException(`User participation with ID ${id} not found`);
    }
    return userParticipation;
  }

  async update(id: string, updateUserParticipationDto: UpdateUserParticipationDto): Promise<UserParticipation> {
    const updatedUserParticipation = await this.prisma.userParticipation.update({
      where: { id },
      data: updateUserParticipationDto,
    });
    if (!updatedUserParticipation) {
      throw new NotFoundException(`User participation with ID ${id} not found`);
    }
    return updatedUserParticipation;
  }

  async remove(id: string): Promise<UserParticipation> {
    const deletedUserParticipation = await this.prisma.userParticipation.delete({ where: { id } });
    if (!deletedUserParticipation) {
      throw new NotFoundException(`User participation with ID ${id} not found`);
    }
    return deletedUserParticipation;
  }
}
