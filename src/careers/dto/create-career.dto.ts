import { ApiProperty } from "@nestjs/swagger";
import { IsString,IsEnum, IsArray, ArrayNotEmpty } from "class-validator";
import { CareerType } from "@prisma/client";
import { UserCareer, InstitutionCareer } from "@prisma/client";

export class CreateCareerDto {

  @ApiProperty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsEnum(CareerType)
  type: CareerType;

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  userCareers: UserCareer[];

  @ApiProperty()
  @IsArray()
  @ArrayNotEmpty()
  institutionCareers: InstitutionCareer[];
}

