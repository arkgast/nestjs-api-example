import { Test, TestingModule } from '@nestjs/testing'

import { ProductsService } from './products.service'
import { DatastoreService } from '../datastore/datastore.service'

describe('ProductsService', () => {
  let productsService: ProductsService
  let datastoreService: DatastoreService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatastoreService, ProductsService]
    }).compile()
    productsService = module.get<ProductsService>(ProductsService)
    datastoreService = module.get<DatastoreService>(DatastoreService)
  })
  it('should be defined', () => {
    expect(productsService).toBeDefined()
    expect(datastoreService).toBeDefined()
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
    jest.spyOn(datastoreService, 'find').mockImplementation(() => result)
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
    jest.spyOn(datastoreService, 'findOne').mockImplementation(() => result)
    expect(await productsService.findOne('bxR2xj7kma6cQUtQBInC')).toBe(result)
  })
})
