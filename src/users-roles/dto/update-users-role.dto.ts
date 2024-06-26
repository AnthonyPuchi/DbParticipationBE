import { PartialType } from '@nestjs/swagger';
import { CreateUserRoleDto } from './create-users-role.dto';

export class UpdateUserRoleDto extends PartialType(CreateUserRoleDto) {}
