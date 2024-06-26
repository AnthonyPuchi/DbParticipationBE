import { Module } from '@nestjs/common';
import { FocusScoreFormulaService } from './focus-score-formula.service';
import { FocusScoreFormulaController } from './focus-score-formula.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FocusScoreFormulaController],
  providers: [FocusScoreFormulaService],
  imports: [PrismaModule],
})
export class FocusScoreFormulaModule {}
