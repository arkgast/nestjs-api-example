import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'

import { ProductsModule } from '../src/products/products.module'
import { ProductsService } from '../src/products/products.service'

describe('Companies', () => {
  let app: INestApplication
  let productsService = {
    findAll: () => [{
      'id': 'TiHFD1K1V1B5r6OtJ4g4',
      'finalProduct': false,
      'company': 'tt8hFhxRTnaPxCpzOiqN',
      'name': 'Revista Semana'
    }],
    findAllByQuery: () => [{
      'id': 'TiHFD1K1V1B5r6OtJ4g4',
      'finalProduct': false,
      'company': 'tt8hFhxRTnaPxCpzOiqN',
      'name': 'Revista Semana'
    }]
  }

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [ProductsModule]
    })
      .overrideProvider(ProductsService)
      .useValue(productsService)
      .compile()

    app = module.createNestApplication()
    await app.init()
  })

  it('/GET products', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect(productsService.findAll())
  })
})
