import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsBoolean } from 'class-validator';

export class CreateUserParticipationDto {
  @ApiProperty()
  @IsUUID()
  userTopicId: string;

  @ApiProperty()
  @IsString()
  message: string;

  @ApiProperty()
  @IsBoolean()
  status: boolean;
}
