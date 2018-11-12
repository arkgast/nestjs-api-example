import { INestApplication } from '@nestjs/common'
import { Test } from '@nestjs/testing'
import * as request from 'supertest'

import { CompaniesModule } from '../src/companies/companies.module'
import { CompaniesService } from '../src/companies/companies.service'

describe('Companies', () => {
  let app: INestApplication
  let companiesService = { findAll: () => [{
    'id': '4h5hqdcisGMtfaOoKoLY',
    'name': 'Viva',
    'country': 'GbE3SfD7izIYvuGgH16f'
  }]}

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [CompaniesModule]
    })
      .overrideProvider(CompaniesService)
      .useValue(companiesService)
      .compile()

    app = module.createNestApplication()
    await app.init()
  })

  it('/GET companies', () => {
    return request(app.getHttpServer())
      .get('/companies')
      .expect(200)
      .expect(companiesService.findAll())
  })
})
