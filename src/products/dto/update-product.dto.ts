import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';
import { IsMongoId, IsOptional, IsDate } from 'class-validator';

export class UpdateProductDto extends PartialType(CreateProductDto) {

    @IsOptional()
    @IsMongoId({ each: true })
    user: string[]

    @IsOptional()
    @IsDate()
    updatedAt: Date;
}
