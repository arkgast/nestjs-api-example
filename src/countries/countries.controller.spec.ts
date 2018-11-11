import { Test, TestingModule } from '@nestjs/testing'
import { CountriesController } from './countries.controller'

describe('Countries Controller', () => {
  let module: TestingModule

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CountriesController]
    }).compile()
  })

  it('should be defined', () => {
    const controller: CountriesController = module.get<CountriesController>(CountriesController)
    expect(controller).toBeDefined()
  })
})
