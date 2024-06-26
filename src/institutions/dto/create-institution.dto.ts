import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsEnum, IsInt, IsOptional, IsString, IsUUID, IsBoolean, IsArray, IsNumber, IsNotEmpty } from 'class-validator';
import { Gender, Sex, Level, InstitutionType, CareerType } from '@prisma/client';

export class CreateInstitutionDto {
    @ApiProperty()
    @IsUUID()
    id: string;
  
    @ApiProperty()
    @IsString()
    name: string;
  
    @ApiProperty()
    @IsString()
    description: string;
  
    @ApiProperty()
    @IsEnum(InstitutionType)
    type: InstitutionType;
  }
  