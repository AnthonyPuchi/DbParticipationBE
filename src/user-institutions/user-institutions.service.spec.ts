import { Test, TestingModule } from '@nestjs/testing';
import { UserInstitutionsService } from './user-institutions.service';

describe('UserInstitutionsService', () => {
  let service: UserInstitutionsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserInstitutionsService],
    }).compile();

    service = module.get<UserInstitutionsService>(UserInstitutionsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
