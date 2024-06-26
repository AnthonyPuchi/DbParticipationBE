import { PartialType } from '@nestjs/swagger';
import { CreateUserCareerDto } from './create-user-career.dto';

export class UpdateUserCareerDto extends PartialType(CreateUserCareerDto) {}
