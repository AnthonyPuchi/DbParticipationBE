import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  BadRequestException
} from "@nestjs/common";
import { UserParticipationService } from './userparticipation.service';
import { CreateUserParticipationDto } from './dto/create-userparticipation.dto';
import { UpdateUserParticipationDto } from './dto/update-userparticipation.dto';

@Controller('user-participation')
export class UserParticipationController {
  constructor(private readonly userParticipationService: UserParticipationService) {}

  @Post()
  @UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
  async createUserParticipation(@Body() createUserParticipationDto: CreateUserParticipationDto) {
    try {
      const result = await this.userParticipationService.create(createUserParticipationDto);
      return result;
    } catch (error) {
      console.error('Error creating user participation:', error);
      throw new BadRequestException(error.message);
    }
  }

  @Get()
  findAll() {
    return this.userParticipationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userParticipationService.findOne(id);
  }

  @Get('by-topic/:topicId')
  async findByTopicId(@Param('topicId') topicId: string) {
    return this.userParticipationService.findByTopicId(topicId);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserParticipationDto: UpdateUserParticipationDto) {
    return this.userParticipationService.update(id, updateUserParticipationDto);
  }
}
