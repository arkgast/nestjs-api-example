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
  async create (@Res() res, @Body() createCountryDto: CreateCountryDto) {
    const country = await this.service.create(createCountryDto)
    res.status(HttpStatus.OK).send(country)
  }

  @Put(':id')
  async update (@Res() res, @Body() createCountryDto, @Param('id') id) {
    const country = await this.service.update(id, createCountryDto)
    res.status(HttpStatus.OK).send(country)
  }

  @Delete(':id')
  async delete (@Res() res, @Param('id') id) {
    const result = await this.service.delete(id)
    res.status(HttpStatus.OK).send(result)
  }
}
