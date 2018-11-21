import { Controller, Get, Post, Res, Param, Query, Body, HttpStatus } from '@nestjs/common'
import { ApiUseTags } from '@nestjs/swagger'

import { CountriesService } from './countries.service'
import { CreateCountryDto } from './dto/create-country.dto'

@ApiUseTags('Country')
@Controller('countries')
export class CountriesController {
  constructor (private readonly service: CountriesService) {}

  @Get()
  async findAll (@Res() res, @Query() query) {
    const countries = await this.service.findAll(query)
    res.status(HttpStatus.OK).send(countries)
  }

  @Get(':id')
  async findOne (@Res() res, @Param('id') id) {
    const country = await this.service.findOne(id)
    res.status(HttpStatus.OK).send(country)
  }

  @Post()
  async create (@Body() createCountryDto: CreateCountryDto) {
    return this.service.create(createCountryDto)
  }
}
