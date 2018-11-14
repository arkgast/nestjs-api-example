import { Controller, Get, Res, Param, HttpStatus, UseGuards } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

import { UsersService } from './users.service'

@Controller('users')
export class UsersController {
  constructor (private readonly service: UsersService) {}

  @Get()
  @UseGuards(AuthGuard('bearer'))
  async findAll (@Res() res) {
    const users = this.service.findAll()
    res.status(HttpStatus.OK).send(users)
  }

  @Get(':id')
  async findOne (@Res() res, @Param('id') id) {
    const user = this.service.findOne(id)
    res.status(HttpStatus.OK).send(user)
  }
}
