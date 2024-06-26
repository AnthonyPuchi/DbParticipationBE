import { PartialType } from '@nestjs/mapped-types';
import { CreateUserInstitutionDto } from './create-user-institution.dto';

export class UpdateUserInstitutionDto extends PartialType(CreateUserInstitutionDto) {}
