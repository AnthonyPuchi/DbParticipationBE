import { Test, TestingModule } from '@nestjs/testing';
import { UserCareersService } from './user-careers.service';

describe('UserCareersService', () => {
  let service: UserCareersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCareersService],
    }).compile();

    service = module.get<UserCareersService>(UserCareersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
