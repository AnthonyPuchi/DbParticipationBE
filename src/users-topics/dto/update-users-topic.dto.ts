import { PartialType } from '@nestjs/swagger';
import { CreateUserTopicDto } from './create-users-topic.dto';

export class UpdateUserTopicDto extends PartialType(CreateUserTopicDto) {}
