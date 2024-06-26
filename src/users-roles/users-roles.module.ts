import { Module } from '@nestjs/common';
import { UsersRolesService } from './users-roles.service';
import { UsersRolesController } from './users-roles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UsersRolesController],
  providers: [UsersRolesService],
  imports: [PrismaModule],
})
export class UsersRolesModule {}
