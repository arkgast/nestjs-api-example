import { Test, TestingModule } from '@nestjs/testing'

import { CompaniesController } from './companies.controller'
import { CompaniesService } from './companies.service'
import { DatastoreService } from '../datastore/datastore.service'

describe('Companies Controller', () => {
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [DatastoreService, CompaniesService]
    }).compile()
  })
  it('should be defined', () => {
    const controller: CompaniesController = module.get<CompaniesController>(
      CompaniesController
    )
    expect(controller).toBeDefined()
  })
})
