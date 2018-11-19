import { Controller, Get, Put, Post, Delete, Res, Param, HttpStatus, Body } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { UsersService } from './users.service'
import { CreateUserDto } from './dto/create-user.dto'

@Controller('users')
export class UsersController {
  constructor (private readonly service: UsersService) {}

  @Get()
  async findAll (@Res() res) {
    const users = await this.service.findAll()
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
