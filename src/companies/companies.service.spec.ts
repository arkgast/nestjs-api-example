import { Test, TestingModule } from '@nestjs/testing'

import { CompaniesService } from './companies.service'
import { FirestoreService } from '../firestore/firestore.service'

describe('CompaniesService', () => {
  let companiesService: CompaniesService
  let firestoreService: FirestoreService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirestoreService, CompaniesService]
    }).compile()
    companiesService = module.get<CompaniesService>(CompaniesService)
    firestoreService = module.get<FirestoreService>(FirestoreService)
  })
  it('should be defined', () => {
    expect(companiesService).toBeDefined()
    expect(firestoreService).toBeDefined()
  })
  it('should findAll', async () => {
    const result = [
      {
        id: '4h5hqdcisGMtfaOoKoLY',
        name: 'Viva',
        country: 'GbE3SfD7izIYvuGgH16f'
      }
    ]
    jest.spyOn(firestoreService, 'find').mockImplementation(() => result)
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
    jest.spyOn(firestoreService, 'findOne').mockImplementation(() => result)
    expect(await companiesService.findOne('4h5hqdcisGMtfaOoKoLY')).toBe(result)
  })
})
