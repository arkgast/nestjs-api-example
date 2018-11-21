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

import { PersonsService } from './persons.service'
import { CreateUserDto } from './dto/create-user.dto'

@ApiUseTags('Person')
@Controller('persons')
export class PersonsController {
  constructor (private readonly service: PersonsService) {}

  @Get()
  async findAll (@Res() res, @Query() query) {
    const users = await this.service.findAll(query)
    res.status(HttpStatus.OK).send(users)
  }

  @Get(':id')
  async findOne (@Res() res, @Param('id') id) {
    const user = await this.service.findOne(id)
    res.status(HttpStatus.OK).send(user)
  }

  @Post()
  async create (@Res() res, @Body() createUserDto: CreateUserDto) {
    const user = await this.service.create(createUserDto)
    res.status(HttpStatus.OK).send(user)
  }

  @Put(':id')
  async update (@Res() res, @Body() createUserDto: CreateUserDto, @Param('id') id) {
    const user = await this.service.update(id, createUserDto)
    res.status(HttpStatus.OK).send(user)
  }

  @Delete(':id')
  async delete (@Res() res, @Param('id') id: string) {
    const result = await this.service.delete(id)
    res.status(HttpStatus.OK).send(result)
  }
}
