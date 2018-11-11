import { Controller, Get, Res, Param, HttpStatus } from '@nestjs/common'
import { CountriesService } from './countries.service'
import { Country } from './interfaces/country.interface'

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
}
