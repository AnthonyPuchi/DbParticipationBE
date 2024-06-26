import { PartialType } from '@nestjs/swagger';
import { CreateUserRoomDto } from './create-users-room.dto';

export class UpdateUserRoomDto extends PartialType(CreateUserRoomDto) {}
