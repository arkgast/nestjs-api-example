import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'

import { CountriesModule } from '../src/countries/countries.module'
import { CountriesService } from '../src/countries/countries.service'

describe('Countries', () => {
  let app: INestApplication
  let countriesService = { findAll: () => [{ id: 'BOB', name: 'Bolivia' }] }

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [CountriesModule]
    })
      .overrideProvider(CountriesService)
      .useValue(countriesService)
      .compile()

    app = module.createNestApplication()
    await app.init()
  })

  it('/GET countries', () => {
    return request(app.getHttpServer())
      .get('/countries')
      .expect(200)
      .expect(countriesService.findAll())
  })
})
