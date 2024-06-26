import { Test, TestingModule } from '@nestjs/testing';
import { UsersRoomsService } from './users-rooms.service';

describe('UsersRoomsService', () => {
  let service: UsersRoomsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersRoomsService],
    }).compile();

    service = module.get<UsersRoomsService>(UsersRoomsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
