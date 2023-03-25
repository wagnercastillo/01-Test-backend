import { IsDate, IsOptional, IsString } from "class-validator";

export class CreateUserDto {

    @IsString()
    name: string;

    @IsString()
    lastName: string;

    @IsString()
    email: string;

    @IsDate()
    @IsOptional()
    createdAt: Date;
}
