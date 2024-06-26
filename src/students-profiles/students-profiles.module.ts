import { Module } from '@nestjs/common';
import { StudentsProfilesService } from './students-profiles.service';
import { StudentsProfilesController } from './students-profiles.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [StudentsProfilesController],
  providers: [StudentsProfilesService],
  imports: [PrismaModule],
})
export class StudentsProfilesModule {}
