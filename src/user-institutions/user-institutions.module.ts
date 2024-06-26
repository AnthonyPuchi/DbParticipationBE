import { Module } from '@nestjs/common';
import { UserInstitutionService } from './user-institutions.service';
import { UserInstitutionController } from './user-institutions.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [UserInstitutionController],
  providers: [UserInstitutionService],
  imports: [PrismaModule],
})
export class UserInstitutionModule {}
