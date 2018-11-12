import { Test, TestingModule } from '@nestjs/testing'

import { ProductsController } from './products.controller'
import { ProductsService } from './products.service'
import { FirestoreService } from '../firestore/firestore.service'

describe('Products Controller', () => {
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [ProductsController],
      providers: [FirestoreService, ProductsService]
    }).compile()
  })
  it('should be defined', () => {
    const controller: ProductsController = module.get<ProductsController>(ProductsController)
    expect(controller).toBeDefined()
  })
})
