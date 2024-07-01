import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUUID, IsBoolean, IsArray } from 'class-validator';
import { UserRoom } from '@prisma/client';

export class CreateRoomDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsBoolean()
    isActive: boolean;

    @ApiProperty()
    @IsUUID()
    createdBy: string;

    @ApiProperty()
    @IsUUID()
    focusScoreFormulaId: string;

    @ApiProperty()
    @IsArray()
    roomMembers: UserRoom[];
}
