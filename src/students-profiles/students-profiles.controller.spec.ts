import { Test, TestingModule } from '@nestjs/testing';
import { StudentsProfilesController } from './students-profiles.controller';
import { StudentsProfilesService } from './students-profiles.service';

describe('StudentsProfilesController', () => {
  let controller: StudentsProfilesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsProfilesController],
      providers: [StudentsProfilesService],
    }).compile();

    controller = module.get<StudentsProfilesController>(StudentsProfilesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
