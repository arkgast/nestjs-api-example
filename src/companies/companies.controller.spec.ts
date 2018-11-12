import { Test, TestingModule } from '@nestjs/testing'

import { CompaniesController } from './companies.controller'
import { CompaniesService } from './companies.service'
import { FirestoreService } from '../firestore/firestore.service'

describe('Companies Controller', () => {
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CompaniesController],
      providers: [FirestoreService, CompaniesService]
    }).compile()
  })
  it('should be defined', () => {
    const controller: CompaniesController = module.get<CompaniesController>(CompaniesController)
    expect(controller).toBeDefined()
  })
})
