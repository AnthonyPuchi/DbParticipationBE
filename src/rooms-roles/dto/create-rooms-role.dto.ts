import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsInt, IsOptional, IsString, IsUUID, IsBoolean, IsArray, IsNumber, IsNotEmpty } from 'class-validator';
import { Gender, Sex, Level, InstitutionType, CareerType } from '@prisma/client';


export class CreateRoomRoleDto {
    @ApiProperty()
    @IsUUID()
    id: string;
  
    @ApiProperty()
    @IsString()
    roleName: string;
  
}
