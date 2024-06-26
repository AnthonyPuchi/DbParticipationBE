import { Injectable } from '@nestjs/common';
import { CreateUserRoleDto } from './dto/create-users-role.dto';
import { UpdateUserRoleDto } from './dto/update-users-role.dto';
import { PrismaService } from '../prisma/prisma.service';
import { UserRole } from '@prisma/client';
import { User, Role } from '@prisma/client';

@Injectable()
export class UsersRolesService{
  constructor(private prismaService: PrismaService) {}

  async create(createUserRoleDto: CreateUserRoleDto): Promise<UserRole> {
    return this.prismaService.userRole.create({
      data: createUserRoleDto,
    });
  }

  async findAll(): Promise<UserRole[]> {
    return this.prismaService.userRole.findMany();
  }

  async findOne(userId: string, roleId: string): Promise<UserRole> {
    return this.prismaService.userRole.findUnique({
      where: { userId_roleId: { userId, roleId } },
    });
  }

  async update(
    userId: string,
    roleId: string,
    updateUserRoleDto: UpdateUserRoleDto,
  ): Promise<UserRole> {
    return this.prismaService.userRole.update({
      where: { userId_roleId: { userId, roleId } },
      data: updateUserRoleDto,
    });
  }

  async remove(userId: string, roleId: string): Promise<UserRole> {
    return this.prismaService.userRole.delete({
      where: { userId_roleId: { userId, roleId } },
    });
  }

}
