import { Test, TestingModule } from '@nestjs/testing';
import { RoomsRolesController } from './rooms-roles.controller';
import { RoomsRolesService } from './rooms-roles.service';

describe('RoomsRolesController', () => {
  let controller: RoomsRolesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoomsRolesController],
      providers: [RoomsRolesService],
    }).compile();

    controller = module.get<RoomsRolesController>(RoomsRolesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
