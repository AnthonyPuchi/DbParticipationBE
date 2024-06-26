import { Module } from '@nestjs/common';
import { RoomsRolesService } from './rooms-roles.service';
import { RoomsRolesController } from './rooms-roles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [RoomsRolesController],
  providers: [RoomsRolesService],
  imports: [PrismaModule],
})
export class RoomsRolesModule {}
