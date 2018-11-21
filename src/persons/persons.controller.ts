import { Controller, Get, Put, Post, Delete, Res, Param, Query, HttpStatus, Body } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { PersonsService } from './persons.service'
import { CreateUserDto } from './dto/create-user.dto'

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
  async create (@Body() createUserDto: CreateUserDto) {
    return this.service.create(createUserDto)
  }

  @Put(':id')
  async update (@Body() createUserDto: CreateUserDto, @Param('id') id: string) {
    return this.service.update(id, createUserDto)
  }

  @Delete(':id')
  async delete (@Param('id') id: string) {
    return this.service.delete(id)
  }
}
