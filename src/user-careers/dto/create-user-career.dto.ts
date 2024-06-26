import { IsString, IsUUID } from 'class-validator';

export class CreateUserCareerDto {
  @IsUUID()
  userId: string;

  @IsUUID()
  careerId: string;
}
