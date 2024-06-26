import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StudentsProfilesService } from './students-profiles.service';
import { CreateStudentProfileDto } from './dto/create-students-profile.dto';
import { UpdateStudentProfileDto } from './dto/update-students-profile.dto';

@Controller('students-profiles')
export class StudentsProfilesController {
  constructor(private readonly studentsProfilesService: StudentsProfilesService) {}

  @Post()
  create(@Body() createStudentProfileDto: CreateStudentProfileDto) {
    return this.studentsProfilesService.create(createStudentProfileDto);
  }

  @Get()
  findAll() {
    return this.studentsProfilesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentsProfilesService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStudentProfileDto: UpdateStudentProfileDto) {
    return this.studentsProfilesService.update(id, updateStudentProfileDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentsProfilesService.remove(id);
  }
}
