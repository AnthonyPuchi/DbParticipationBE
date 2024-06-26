import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsInt, IsOptional, IsString, IsUUID, IsBoolean, IsArray, IsNumber, IsNotEmpty } from 'class-validator';
import { Gender, Sex, Level, InstitutionType, CareerType } from '@prisma/client';

export class CreatePermissionDto {
    @ApiProperty()
    @IsUUID()
    id: string;
  
    @ApiProperty()
    @IsString()
    permissionName: string;
  
}
