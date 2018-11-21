import { Test, TestingModule } from '@nestjs/testing'

import { ProductsService } from './products.service'
import { FirestoreService } from '../firestore/firestore.service'

describe('ProductsService', () => {
  let productsService: ProductsService
  let firestoreService: FirestoreService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirestoreService, ProductsService]
    }).compile()
    productsService = module.get<ProductsService>(ProductsService)
    firestoreService = module.get<FirestoreService>(FirestoreService)
  })
  it('should be defined', () => {
    expect(productsService).toBeDefined()
    expect(firestoreService).toBeDefined()
  })
  it('should findAll', async () => {
    const result = [
      {
        id: 'bxR2xj7kma6cQUtQBInC',
        finalProduct: true,
        parentId: 'TiHFD1K1V1B5r6OtJ4g4',
        company: 'tt8hFhxRTnaPxCpzOiqN',
        name: 'Revista Semana 52 ediciones anual'
      }
    ]
    jest.spyOn(firestoreService, 'find').mockImplementation(() => result)
    expect(await productsService.findAll()).toBe(result)
  })
  it('should findOne', async () => {
    const result = {
      id: 'bxR2xj7kma6cQUtQBInC',
      finalProduct: true,
      parentId: 'TiHFD1K1V1B5r6OtJ4g4',
      company: 'tt8hFhxRTnaPxCpzOiqN',
      name: 'Revista Semana 52 ediciones anual'
    }
    jest.spyOn(firestoreService, 'findOne').mockImplementation(() => result)
    expect(await productsService.findOne('bxR2xj7kma6cQUtQBInC')).toBe(result)
  })
})
