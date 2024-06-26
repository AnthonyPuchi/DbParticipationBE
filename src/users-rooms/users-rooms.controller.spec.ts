import { Test, TestingModule } from '@nestjs/testing';
import { UsersRoomsController } from './users-rooms.controller';
import { UsersRoomsService } from './users-rooms.service';

describe('UsersRoomsController', () => {
  let controller: UsersRoomsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersRoomsController],
      providers: [UsersRoomsService],
    }).compile();

    controller = module.get<UsersRoomsController>(UsersRoomsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
