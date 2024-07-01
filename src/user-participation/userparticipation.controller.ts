import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserParticipationService } from './userparticipation.service';
import { CreateUserParticipationDto } from './dto/create-userparticipation.dto';
import { UpdateUserParticipationDto } from './dto/update-userparticipation.dto';

@Controller('user-participation')
export class UserParticipationController {
  constructor(private readonly userParticipationService: UserParticipationService) {}

  @Post()
  create(@Body() createUserParticipationDto: CreateUserParticipationDto) {
    return this.userParticipationService.create(createUserParticipationDto);
  }

  @Get()
  findAll() {
    return this.userParticipationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userParticipationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserParticipationDto: UpdateUserParticipationDto) {
    return this.userParticipationService.update(id, updateUserParticipationDto);
  }
}
