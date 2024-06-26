import { Test, TestingModule } from '@nestjs/testing';
import { UsersTopicsService } from './users-topics.service';

describe('UsersTopicsService', () => {
  let service: UsersTopicsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersTopicsService],
    }).compile();

    service = module.get<UsersTopicsService>(UsersTopicsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
