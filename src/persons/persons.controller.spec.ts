import { Test, TestingModule } from '@nestjs/testing'

import { PersonsController } from './persons.controller'

describe('Users Controller', () => {
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [PersonsController]
    }).compile()
  })
  it('should be defined', () => {
    const controller: PersonsController = module.get<PersonsController>(
      PersonsController
    )
    expect(controller).toBeDefined()
  })
})
