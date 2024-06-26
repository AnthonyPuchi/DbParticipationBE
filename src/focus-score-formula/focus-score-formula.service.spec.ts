import { Test, TestingModule } from '@nestjs/testing';
import { FocusScoreFormulaService } from './focus-score-formula.service';

describe('FocusScoreFormulaService', () => {
  let service: FocusScoreFormulaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FocusScoreFormulaService],
    }).compile();

    service = module.get<FocusScoreFormulaService>(FocusScoreFormulaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
