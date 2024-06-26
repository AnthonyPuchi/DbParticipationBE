import { Injectable } from '@nestjs/common';
import { CreateFocusScoreFormulaDto } from './dto/create-focus-score-formula.dto';
import { UpdateFocusScoreFormulaDto } from './dto/update-focus-score-formula.dto';
import { BaseService } from 'src/prisma/prisma.base.service';
import { FocusScoreFormula } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FocusScoreFormulaService extends BaseService<
  FocusScoreFormula,
  CreateFocusScoreFormulaDto,
  UpdateFocusScoreFormulaDto>
{
  constructor(private prismaService: PrismaService) {
    super(prismaService, { name: 'focusScoreFormula' });
  }
}
