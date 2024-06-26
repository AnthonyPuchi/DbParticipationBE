import {
    IsString,
    IsInt,
    IsEmail,
    IsBoolean,
    IsOptional,

    IsEnum
  } from 'class-validator';
  import { Gender, Sex } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
  
  export class CreateUserDto {
    @ApiProperty()
    @IsEmail()
    institutionalEmail: string;

    @ApiProperty()
    @IsString()
    firstName: string;

    @ApiProperty() 
    @IsString()
    lastName: string;

    @ApiProperty() 
    @IsString()
    @IsOptional()
    description?: string;

    @ApiProperty() 
    @IsInt()
    age: number;

    @ApiProperty() 
    @IsString()
    phone: string;

    @ApiProperty()
    @IsEnum(Sex)
    sex: Sex;

    @ApiProperty()  
    @IsEnum(Gender)
    gender: Gender;
    
    @ApiProperty() 
    @IsBoolean()
    isActive: boolean;
  }
  