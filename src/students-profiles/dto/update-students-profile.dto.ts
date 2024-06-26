import { PartialType } from '@nestjs/swagger';
import { CreateStudentProfileDto } from './create-students-profile.dto';

export class UpdateStudentProfileDto extends PartialType(CreateStudentProfileDto) {}
