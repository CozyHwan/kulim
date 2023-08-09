import { Test } from '@nestjs/testing';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let productService: ProductService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [ProductService],
    }).compile();

    productService = module.get<ProductService>(ProductService);
  });

  it('getProduct', () => {
    const product = productService.getProduct();

    expect(product).toEqual('Hello World!');
  });
});
