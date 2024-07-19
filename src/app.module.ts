import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { TopicsModule } from './topics/topics.module';
import { RoomsModule } from './rooms/rooms.module';
import { UsersTopicsModule } from './users-topics/users-topics.module';
import { RolesModule } from './roles/roles.module';
import { UsersRolesModule } from './users-roles/users-roles.module';
import {ParticipationModule} from "./participation/participation.module";
import { UserParticipationModule } from './user-participation/userparticipation.module';
import { UsersRoomsModule} from "./users-rooms/users-rooms.module";
import { StudentsProfilesModule } from "./students-profiles/students-profiles.module";
import { AppGateway } from './config/app.gateway';

@Module({
  imports: [PrismaModule, UsersModule, StudentsProfilesModule, UsersRoomsModule, TopicsModule, RoomsModule, RolesModule, UsersRolesModule, UsersTopicsModule, ParticipationModule, UserParticipationModule],
  controllers: [AppController],
  providers: [AppService, AppGateway ],
})
export class AppModule {}
