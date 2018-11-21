import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Query,
  Res
} from '@nestjs/common'
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
  async findOne (@Res() res, @Param('id') id) {
    const company = await this.service.findOne(id)
    res.status(HttpStatus.OK).send(company)
  }

  @Post()
  async create (@Res() res, @Body() createCompanyDto) {
    const company = await this.service.create(createCompanyDto)
    res.status(HttpStatus.OK).send(company)
  }

  @Put(':id')
  async update (@Res() res, @Body() createCompanyDto, @Param('id') id: string) {
    const company = await this.service.update(id, createCompanyDto)
    res.status(HttpStatus.OK).send(company)
  }

  @Delete(':id')
  async delete (@Res() res, @Param('id') id: string) {
    const result = await this.service.delete(id)
    res.status(HttpStatus.OK).send(result)
  }
}
