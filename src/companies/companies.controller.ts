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
  async findAll (@Res() res, @Query() query: QueryCountry) {
    const companies = await this.service.findAll(query)
    res.status(HttpStatus.OK).send(companies)
  }

  @Get(':id')
  async findOne (@Param('id') id, @Res() res) {
    const company = await this.service.findOne(id)
    res.status(HttpStatus.OK).send(company)
  }
}
