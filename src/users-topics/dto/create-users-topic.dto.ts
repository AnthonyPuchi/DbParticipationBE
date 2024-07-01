import { ApiProperty } from '@nestjs/swagger';
import { IsUUID, IsInt } from 'class-validator';

export class CreateUserTopicDto {
    @ApiProperty()
    @IsUUID()
    id: string;

    @ApiProperty()
    @IsUUID()
    userId: string;

    @ApiProperty()
    @IsUUID()
    topicId: string;

    @ApiProperty()
    @IsInt()
    participationCount: number;
}
