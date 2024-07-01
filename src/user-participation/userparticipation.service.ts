import { Injectable } from '@nestjs/common';
import { CreateUserParticipationDto } from './dto/create-userparticipation.dto';
import { UpdateUserParticipationDto } from './dto/update-userparticipation.dto';

@Injectable()
export class UserParticipationService {
  private userParticipations = [];

  create(createUserParticipationDto: CreateUserParticipationDto) {
    const newUserParticipation = { id: Date.now().toString(), ...createUserParticipationDto };
    this.userParticipations.push(newUserParticipation);
    return newUserParticipation;
  }

  findAll() {
    return this.userParticipations;
  }

  findOne(id: string) {
    return this.userParticipations.find(item => item.id === id);
  }

  update(id: string, updateUserParticipationDto: UpdateUserParticipationDto) {
    const userParticipationIndex = this.userParticipations.findIndex(item => item.id === id);
    if (userParticipationIndex === -1) {
      return null;
    }
    this.userParticipations[userParticipationIndex] = {
      ...this.userParticipations[userParticipationIndex],
      ...updateUserParticipationDto,
    };
    return this.userParticipations[userParticipationIndex];
  }
}
