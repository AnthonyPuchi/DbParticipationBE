import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { BaseService } from 'src/prisma/prisma.base.service';
import { User } from '@prisma/client';

@Injectable()
export class UsersService extends BaseService<User, CreateUserDto, UpdateUserDto> {
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'user' });
  }

  // Nuevo método para obtener el userId por email
  async findUserByEmail(email: string): Promise<User | null> {
    return this.prismaService.user.findUnique({ where: { institutionalEmail: email } });
  }
}
