import { Controller, Get, Post, Res, Param, Body, HttpStatus } from '@nestjs/common'
import { ApiUseTags } from '@nestjs/swagger'

import { CountriesService } from './countries.service'
import { CreateCountryDto } from './dto/create-country.dto'
import { ValidationPipe } from '../validation.pipe'

@ApiUseTags('Country')
@Controller('countries')
export class CountriesController {
  constructor (private readonly service: CountriesService) {}

  @Get()
  async findAll (@Res() res) {
    const countries = await this.service.findAll()
    res.status(HttpStatus.OK).send(countries)
  }

  @Get(':id')
  async findOne (@Res() res, @Param('id') id) {
    const country = await this.service.findOne(id)
    res.status(HttpStatus.OK).send(country)
  }

  @Post()
  async create (@Body(new ValidationPipe()) createCountryDto: CreateCountryDto) {
    return this.service.create(createCountryDto)
  }
}
