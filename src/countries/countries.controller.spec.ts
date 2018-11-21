import { Test, TestingModule } from '@nestjs/testing'

import { CountriesController } from './countries.controller'
import { CountriesService } from './countries.service'
import { FirestoreService } from '../firestore/firestore.service'

describe('Countries Controller', () => {
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CountriesController],
      providers: [FirestoreService, CountriesService]
    }).compile()
  })

  it('should be defined', () => {
    const controller: CountriesController = module.get<CountriesController>(
      CountriesController
    )
    expect(controller).toBeDefined()
  })
})
