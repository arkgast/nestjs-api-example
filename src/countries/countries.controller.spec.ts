import { Test, TestingModule } from '@nestjs/testing'

import { CountriesController } from './countries.controller'
import { CountriesService } from './countries.service'
import { DatastoreService } from '../datastore/datastore.service'

describe('Countries Controller', () => {
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CountriesController],
      providers: [DatastoreService, CountriesService]
    }).compile()
  })

  it('should be defined', () => {
    const controller: CountriesController = module.get<CountriesController>(
      CountriesController
    )
    expect(controller).toBeDefined()
  })
})
