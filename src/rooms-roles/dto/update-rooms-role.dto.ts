import { PartialType } from '@nestjs/swagger';
import { CreateRoomRoleDto } from './create-rooms-role.dto';

export class UpdateRoomRoleDto extends PartialType(CreateRoomRoleDto) {}
