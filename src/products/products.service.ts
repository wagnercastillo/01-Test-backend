import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model, isValidObjectId } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class ProductsService {

  private defaultLimit: number;

  constructor(
    @InjectModel(Product.name)
    private readonly productModel: Model<Product>,
    private readonly configService: ConfigService

  ) {
    this.defaultLimit = configService.get<number>('default_limit');
  }


  async create(createProductDto: CreateProductDto) {

    try {

      const product = await this.productModel.create(createProductDto);
      return product;

    } catch (error) {

      this.handleExceptions(error);

    }
  }


  findAll(paginationDto: PaginationDto) {

    const { limit = this.defaultLimit, offset = 0 } = paginationDto;

    return this.productModel.find()
      .populate('user', 'name')
      .limit(limit)
      .skip(offset)
      .sort({
        no: 1
      })
      .select('-__v');
  }

  async findOne(term: string) {
    let product: Product;

     if (!product) {
      product = await this.productModel.findOne({ name: term.trim() })
    }

    if (!product && isValidObjectId(term)) {
      product = await this.productModel.findById(term);
    }

    if (!product) throw new NotFoundException(`Product with id, name "${term}" no found`)

    return product;

  }

  async update(term: string, updateProductDto: UpdateProductDto) {

    const product = await this.findOne(term)

    if (updateProductDto.name) {
      updateProductDto.name = updateProductDto.name.toLocaleLowerCase();
    }

    try {
      await product.updateOne(updateProductDto);

      return {
        ...product.toJSON(),
        ...updateProductDto
      };

    } catch (error) {

      this.handleExceptions(error);

    }

  }

  async remove(id: string) {

    const { deletedCount } = await this.productModel.deleteOne({ _id: id })
    if (deletedCount === 0) {
      throw new BadRequestException(`Product with id "${id}" not found`)
    }

    return;

  }


  private handleExceptions(error: any) {

    if (error.code === 11000) {
      throw new BadRequestException(`Product exists in DB ${JSON.stringify(error.keyValue)}`)
    }
    console.log(error)
    throw new InternalServerErrorException(`Cant create Product - Check server logs`)


  }

  async deleteAllProducts(): Promise<any> {
    return await this.productModel.deleteMany({});
  }

}
