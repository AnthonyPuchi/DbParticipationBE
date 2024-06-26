import { Test, TestingModule } from '@nestjs/testing';
import { UsersTopicsController } from './users-topics.controller';
import { UsersTopicsService } from './users-topics.service';

describe('UsersTopicsController', () => {
  let controller: UsersTopicsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersTopicsController],
      providers: [UsersTopicsService],
    }).compile();

    controller = module.get<UsersTopicsController>(UsersTopicsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
