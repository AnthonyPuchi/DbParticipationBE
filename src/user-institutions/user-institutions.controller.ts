import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateUserInstitutionDto } from './dto/create-user-institution.dto';
import { UpdateUserInstitutionDto } from './dto/update-user-institution.dto';
import { UserInstitutionService } from './user-institutions.service';

@Controller('user-institution')
export class UserInstitutionController {
  constructor(private readonly userInstitutionService: UserInstitutionService) {}

  @Post()
  create(@Body() createUserInstitutionDto: CreateUserInstitutionDto) {
    return this.userInstitutionService.create(createUserInstitutionDto);
  }

  @Get()
  findAll() {
    return this.userInstitutionService.findAll();
  }

  @Get(':userId/:institutionId')
  findOne(@Param('userId') userId: string, @Param('institutionId') institutionId: string){
    return this.userInstitutionService.findOne(userId, institutionId);
  }

  @Patch(':userId/:institutionId')
  update(@Param('userId') userId: string, @Param('institutionId') institutionId: string, @Body() updateUserInstitutionDto: UpdateUserInstitutionDto) {
    return this.userInstitutionService.update(userId, institutionId, updateUserInstitutionDto);
  }

  @Delete(':userId/:institutionId')
  remove(@Param('userId') userId: string, @Param('institutionId') institutionId: string){
    return this.userInstitutionService.remove(userId, institutionId);
  }
}
