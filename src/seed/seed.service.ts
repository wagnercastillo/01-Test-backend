import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { SEED_PRODUCT, SEED_USER } from './data';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class SeedService {

  constructor(
    private readonly productsService: ProductsService,
    private readonly usersService: UsersService
  ){}
  
  async runSeed() {

    await this.insertNewUsers();
    await this.insertNewProducts();

    return 'SEED EXECUTED';

  }

  private async insertNewProducts() {

    await this.productsService.deleteAllProducts();
    const products = SEED_PRODUCT.products;
    const insertPromises = [];

    products.forEach( product => {
      insertPromises.push(
        this.productsService.create( product )
      )
    })

    await Promise.all( insertPromises );
    return true;

  }

  private async insertNewUsers() {

    await this.usersService.deleteAllProducts(); 
    const users= SEED_USER.users;
    const insertPromises = [];

    users.forEach( user => {
      insertPromises.push(
        this.usersService.create( user )
      )
    })

    await Promise.all( insertPromises );
    return true;

  }
}
