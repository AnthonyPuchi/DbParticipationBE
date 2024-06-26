import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FocusScoreFormulaService } from './focus-score-formula.service';
import { CreateFocusScoreFormulaDto } from './dto/create-focus-score-formula.dto';
import { UpdateFocusScoreFormulaDto } from './dto/update-focus-score-formula.dto';

@Controller('focus-score-formula')
export class FocusScoreFormulaController {
  constructor(private readonly focusScoreFormulaService: FocusScoreFormulaService) {}

  @Post()
  create(@Body() createFocusScoreFormulaDto: CreateFocusScoreFormulaDto) {
    return this.focusScoreFormulaService.create(createFocusScoreFormulaDto);
  }

  @Get()
  findAll() {
    return this.focusScoreFormulaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.focusScoreFormulaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFocusScoreFormulaDto: UpdateFocusScoreFormulaDto) {
    return this.focusScoreFormulaService.update(id, updateFocusScoreFormulaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.focusScoreFormulaService.remove(id);
  }
}
