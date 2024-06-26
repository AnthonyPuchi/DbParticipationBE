import { Test, TestingModule } from '@nestjs/testing';
import { UserCareersController } from './user-careers.controller';
import { UserCareersService } from './user-careers.service';

describe('UserCareersController', () => {
  let controller: UserCareersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserCareersController],
      providers: [UserCareersService],
    }).compile();

    controller = module.get<UserCareersController>(UserCareersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
