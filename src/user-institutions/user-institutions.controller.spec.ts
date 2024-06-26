import { Test, TestingModule } from '@nestjs/testing';
import { UserInstitutionsController } from './user-institutions.controller';
import { UserInstitutionsService } from './user-institutions.service';

describe('UserInstitutionsController', () => {
  let controller: UserInstitutionsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserInstitutionsController],
      providers: [UserInstitutionsService],
    }).compile();

    controller = module.get<UserInstitutionsController>(UserInstitutionsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
