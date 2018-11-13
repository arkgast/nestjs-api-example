import { Controller, Get, Res, Param, Query, HttpStatus } from '@nestjs/common'
import { ApiUseTags } from '@nestjs/swagger'

import { Company } from './interfaces/company.interface'
import { CompaniesService } from './companies.service'
import { QueryCountry } from './dto/query-country.dto'

@ApiUseTags('Company')
@Controller('companies')
export class CompaniesController {
  constructor (private readonly service: CompaniesService) {}

  @Get()
  async findAll (@Query() query: QueryCountry, @Res() res) {
    let companies: Company []
    if (query.country) {
      companies = await this.service.findAllByCountry(query.country)
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
