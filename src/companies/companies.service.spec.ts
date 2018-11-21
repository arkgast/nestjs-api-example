import { Test, TestingModule } from '@nestjs/testing'

import { CompaniesService } from './companies.service'
import { DatastoreService } from '../datastore/datastore.service'

describe('CompaniesService', () => {
  let companiesService: CompaniesService
  let datastoreService: DatastoreService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatastoreService, CompaniesService]
    }).compile()
    companiesService = module.get<CompaniesService>(CompaniesService)
    datastoreService = module.get<DatastoreService>(DatastoreService)
  })
  it('should be defined', () => {
    expect(companiesService).toBeDefined()
    expect(datastoreService).toBeDefined()
  })
  it('should findAll', async () => {
    const result = [
      {
        id: '4h5hqdcisGMtfaOoKoLY',
        name: 'Viva',
        country: 'GbE3SfD7izIYvuGgH16f'
      }
    ]
    jest.spyOn(datastoreService, 'find').mockImplementation(() => result)
    expect(await companiesService.findAll()).toBe(result)
  })
  it('should findOne', async () => {
    const result = [
      {
        id: '4h5hqdcisGMtfaOoKoLY',
        name: 'Viva',
        country: 'GbE3SfD7izIYvuGgH16f'
      }
    ]
    jest.spyOn(datastoreService, 'findOne').mockImplementation(() => result)
    expect(await companiesService.findOne('4h5hqdcisGMtfaOoKoLY')).toBe(result)
  })
})
