import { ApiProperty } from "@nestjs/swagger";
import { FocusScoreFormula, Topic, UserRoom } from "@prisma/client";
import { IsString,IsBoolean,IsArray, ArrayNotEmpty} from "class-validator";

export class CreateRoomDto {
    @ApiProperty()
    @IsString()
    title: string;

    @ApiProperty()
    @IsString()
    description: string;

    @ApiProperty()
    @IsBoolean()
    isActive: boolean;

    @ApiProperty()
    @IsArray()
    topics: Topic[];

    @ApiProperty()
    @IsArray()
    roomMembers: UserRoom[];

    @ApiProperty()
    @IsString()
    focusScoreFormulaId: string;
}
