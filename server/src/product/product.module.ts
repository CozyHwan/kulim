import { Module } from '@nestjs/common';

import { ConfigModule } from '@nestjs/config';

import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  imports: [ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
  })],
  controllers: [ProductController],
  providers: [ProductService],
})
export class ProductModule { }
