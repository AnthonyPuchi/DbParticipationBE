import { Test, TestingModule } from '@nestjs/testing';
import { FocusScoreFormulaController } from './focus-score-formula.controller';
import { FocusScoreFormulaService } from './focus-score-formula.service';

describe('FocusScoreFormulaController', () => {
  let controller: FocusScoreFormulaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FocusScoreFormulaController],
      providers: [FocusScoreFormulaService],
    }).compile();

    controller = module.get<FocusScoreFormulaController>(FocusScoreFormulaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
