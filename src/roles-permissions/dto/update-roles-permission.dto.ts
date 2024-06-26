import { PartialType } from '@nestjs/swagger';
import { CreateRolePermissionDto } from './create-roles-permission.dto';

export class UpdateRolePermissionDto extends PartialType(CreateRolePermissionDto) {}
