import { Controller, Post, Get } from '@nestjs/common';

import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

    @Get()
  createPost(): string {
    return this.productService.getProduct();
  }
}
