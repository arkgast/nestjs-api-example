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

import { ProductsService } from './products.service'
import { QueryProduct } from './dto/query-product.dto'
import { Product } from './interface/product.interface'

@ApiUseTags('Product')
@Controller('products')
export class ProductsController {
  constructor (private readonly service: ProductsService) {}

  @Get()
  async findAll (@Res() res, @Query() query: QueryProduct) {
    const products = await this.service.findAll(query)
    res.status(HttpStatus.OK).send(products)
  }

  @Get(':id')
  async findOne (@Param('id') id, @Res() res) {
    let product = await this.service.findOne(id)
    res.status(HttpStatus.OK).send(product)
  }

  @Post()
  async create (@Res() res, @Body() createProductDto) {
    let product = this.service.create(createProductDto)
    res.status(HttpStatus.OK).send(product)
  }

  @Put(':id')
  async update (@Res() res, @Body() createProductDto, @Param() id) {
    let product = this.service.update(id, createProductDto)
    res.status(HttpStatus.OK).send(product)
  }

  @Delete(':id')
  async delete (@Res() res, @Param('id') id) {
    let result = this.service.delete(id)
    res.status(HttpStatus.OK).send(result)
  }
}
