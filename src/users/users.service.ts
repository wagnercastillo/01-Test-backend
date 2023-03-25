import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model, isValidObjectId } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { PaginationDto } from 'src/common/dto/pagination.dto';

@Injectable()
export class UsersService {

  private defaultLimit: number;

  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly configService:ConfigService

  ){
    this.defaultLimit = configService.get<number>('default_limit');
  }  
  
  async create(createUserDto: CreateUserDto) {

    try {
      
      const product = await this.userModel.create(createUserDto);
      return product;

    } catch (error) {
      
      this.handleExceptions(error);
      
    }
  }
 
  findAll(paginationDto: PaginationDto) {

    const { limit=this.defaultLimit, offset = 0 } = paginationDto;

    return this.userModel.find()
      .limit(limit)
      .skip(offset)
      .sort({
        no: 1
      })
      .select('-__v');
  }

  async findOne(term: string) {
    let user: User;

    // Numero
    if (!isNaN(+term)) {
      user = await this.userModel.findOne({ no: term })
    }

    // Name 
    if (!user) {
      user = await this.userModel.findOne({ name: term.toLocaleLowerCase().trim() })
    }

    // MongoID
    if (!user && isValidObjectId(term)) {
      user = await this.userModel.findById(term);
    }

    if (!user) throw new NotFoundException(`User with id, name or no "${term}" no found`)

    return user;

  }
  async update(term: string, updateUserDto: UpdateUserDto) {

    const user = await this.findOne(term)

    if (updateUserDto.name) {
      updateUserDto.name = updateUserDto.name.toLocaleLowerCase();
    }

    try {
      await user.updateOne(updateUserDto);

      return {
        ...user.toJSON(),
        ...updateUserDto
      };

    } catch (error) {

      this.handleExceptions(error);
      
    }

  }

  async remove(id: string) {
    
    const { deletedCount } = await this.userModel.deleteOne ({ __id: id  })
    if ( deletedCount === 0 ){
      throw new BadRequestException(`User with id "${ id }" not found`)
    }

    return;

  }


  private handleExceptions(error: any) {

    if (error.code === 11000) {
      throw new BadRequestException(`User exists in DB ${JSON.stringify(error.keyValue)}`)
    }
    console.log(error)
    throw new InternalServerErrorException(`Cant create User - Check server logs`)


  }
}
