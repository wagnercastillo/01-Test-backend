import { IsDate, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateProductDto {
     
    
    @IsString()
    name: string;
    
    @IsNumber()
    price: number;

    @IsString()
    quantity: string;

    @IsDate()
    @IsOptional()
    createAt: Date;
    
    
}
