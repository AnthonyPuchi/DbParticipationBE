import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsInt, IsOptional, IsString, IsUUID, IsBoolean, IsArray, IsNumber, IsNotEmpty } from 'class-validator';
import { Gender, Sex, Level, InstitutionType, CareerType } from '@prisma/client';


export class CreateUserRoleDto {
    @ApiProperty()
    @IsUUID()
    userId: string;
  
    @ApiProperty()
    @IsUUID()
    roleId: string;
  
}
