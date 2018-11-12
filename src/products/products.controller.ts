import { Controller, Get, Res, Param, Query, HttpStatus } from '@nestjs/common'

import { ProductsService } from './products.service'
import { Product } from './interface/product.interface'

@Controller('products')
export class ProductsController {
  constructor (private readonly service: ProductsService) {}

  @Get()
  async findAll (@Res() res, @Query() query) {
    let products: Product[]
    if (query) {
      products = await this.service.findAllByQuery(query)
    } else {
      products = await this.service.findAll()
    }
    res.status(HttpStatus.OK).send(products)
  }

  @Get(':id')
  async findOne (@Param('id') id, @Res() res) {
    let product = await this.service.findOne(id)
    res.status(HttpStatus.OK).send(product)
  }
}
