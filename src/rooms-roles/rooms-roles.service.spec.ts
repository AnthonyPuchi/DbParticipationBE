import { Test, TestingModule } from '@nestjs/testing';
import { RoomsRolesService } from './rooms-roles.service';

describe('RoomsRolesService', () => {
  let service: RoomsRolesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoomsRolesService],
    }).compile();

    service = module.get<RoomsRolesService>(RoomsRolesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
