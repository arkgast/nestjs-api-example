import { Controller, Get, Res, Param, Query, HttpStatus } from '@nestjs/common'

import { Company } from './interfaces/company.interface'
import { CompaniesService } from './companies.service'

@Controller('companies')
export class CompaniesController {
  constructor (private readonly service: CompaniesService) {}

  @Get()
  async findAll (@Query('country') country, @Res() res) {
    let companies: Company []
    if (country) {
      companies = await this.service.findAllByCountry(country)
    } else {
      companies = await this.service.findAll()
    }
    res.status(HttpStatus.OK).send(companies)
  }

  @Get(':id')
  async findOne (@Param('id') id, @Res() res) {
    const company = await this.service.findOne(id)
    res.status(HttpStatus.OK).send(company)
  }
}
