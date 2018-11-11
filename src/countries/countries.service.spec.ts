import { Test, TestingModule } from '@nestjs/testing'

import { CountriesService } from './countries.service'
import { FirestoreService } from '../firestore/firestore.service'

describe('CountriesService', () => {
  let countriesService: CountriesService
  let firestoreService: FirestoreService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FirestoreService, CountriesService]
    }).compile()
    firestoreService = module.get<FirestoreService>(FirestoreService)
    countriesService = module.get<CountriesService>(CountriesService)
  })
  it('should be defined', () => {
    expect(firestoreService).toBeDefined()
    expect(countriesService).toBeDefined()
  })
  it('should findAll', async () => {
    const result = [{ id: 'BOB', name: 'Bolivia' }, { id: 'COL', name: 'Colombia' }]
    jest.spyOn(firestoreService, 'find').mockImplementation(() => result)
    expect(await countriesService.findAll()).toBe(result)
  })
  it('should findOne', async () => {
    const result = { id: 'BOB', name: 'Bolivia' }
    jest.spyOn(firestoreService, 'findOne').mockImplementation(() => result)
    expect(await countriesService.findOne('BOB')).toBe(result)
  })
})
