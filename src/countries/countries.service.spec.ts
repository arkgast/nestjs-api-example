import { Test, TestingModule } from '@nestjs/testing'

import { CountriesService } from './countries.service'
import { DatastoreService } from '../datastore/datastore.service'

describe('CountriesService', () => {
  let countriesService: CountriesService
  let datastoreService: DatastoreService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatastoreService, CountriesService]
    }).compile()
    datastoreService = module.get<DatastoreService>(DatastoreService)
    countriesService = module.get<CountriesService>(CountriesService)
  })
  it('should be defined', () => {
    expect(datastoreService).toBeDefined()
    expect(countriesService).toBeDefined()
  })
  it('should findAll', async () => {
    const result = [
      { id: 'BOB', name: 'Bolivia' },
      { id: 'COL', name: 'Colombia' }
    ]
    jest.spyOn(datastoreService, 'find').mockImplementation(() => result)
    expect(await countriesService.findAll()).toBe(result)
  })
  it('should findOne', async () => {
    const result = { id: 'BOB', name: 'Bolivia' }
    jest.spyOn(datastoreService, 'findOne').mockImplementation(() => result)
    expect(await countriesService.findOne('BOB')).toBe(result)
  })
})
