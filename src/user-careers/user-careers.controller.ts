import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserCareersService } from './user-careers.service';
import { CreateUserCareerDto } from './dto/create-user-career.dto';
import { UpdateUserCareerDto } from './dto/update-user-career.dto';

@Controller('user-careers')
export class UserCareersController {
  constructor(private readonly userCareersService: UserCareersService) {}

  @Post()
  create(@Body() createUserCareerDto: CreateUserCareerDto) {
    return this.userCareersService.create(createUserCareerDto);
  }

  @Get()
  findAll() {
    return this.userCareersService.findAll();
  }

  @Get(':userId/:careerId')
  findOne(@Param('userId') userId: string, @Param('careerId') careerId: string) {
    return this.userCareersService.findOne(userId, careerId);
  }

  @Patch(':userId/:careerId')
  update(@Param('userId') userId: string, @Param('careerId') careerId: string, @Body() updateUserCareerDto: UpdateUserCareerDto) {
    return this.userCareersService.update(userId, careerId, updateUserCareerDto);
  }

  @Delete(':userId/:careerId')
  remove(@Param('userId') userId: string, @Param('careerId') careerId: string) {
    return this.userCareersService.remove(userId, careerId);
  }
}
