import { PartialType } from '@nestjs/swagger';
import { CreateFocusScoreFormulaDto } from './create-focus-score-formula.dto';

export class UpdateFocusScoreFormulaDto extends PartialType(CreateFocusScoreFormulaDto) {}
