import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { ConfigModule } from '@nestjs/config';
import { EnvConfiguration } from './config/env.config';
import { MongooseModule } from '@nestjs/mongoose';

@Module({

  imports: [

    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
    }),   
    ProductsModule,
    MongooseModule.forRoot( process.env.MONGODB ),
  
  ],


  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
