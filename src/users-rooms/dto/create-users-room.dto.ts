import {
    IsString,
    IsInt,
    IsEmail,
    IsBoolean,
    IsOptional,
    IsDecimal,
    IsStrongPassword,
    IsEnum,
    IsUUID
  } from 'class-validator';
  import { Gender, Sex } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserRoomDto {
    @ApiProperty()
    @IsUUID()
    userId: string;
  
    @ApiProperty()
    @IsUUID()
    roomId: string;
  
    @ApiProperty()
    @IsUUID()
    roomRoleId: string;
  
    @ApiProperty()
    @IsInt()
    participationCount: number;
  
}
