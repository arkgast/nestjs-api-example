import { Test, TestingModule } from '@nestjs/testing'
import { CountriesService } from './countries.service'

describe('CountriesService', () => {
  let service: CountriesService

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CountriesService]
    }).compile()
    service = module.get<CountriesService>(CountriesService)
  })
  it('should be defined', () => {
    expect(service).toBeDefined()
  })
})
