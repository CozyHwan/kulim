import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';

import { ProductModule } from '../src/product/product.module';

describe('ProductController (e2e)', () => {
  let module: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ProductModule],
    }).compile();

    module = moduleFixture.createNestApplication();
    await module.init();
  });

  it('/products (GET)', () => request(module.getHttpServer())
    .get('/products')
    .expect(200)
    .expect('Hello World!'));
});
