import { Module } from '@nestjs/common';
import { RolesPermissionsService } from './roles-permissions.service';
import { RolesPermissionsController } from './roles-permissions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RolesPermissionsController],
  providers: [RolesPermissionsService],
  imports: [PrismaModule],
})
export class RolesPermissionsModule {}
