import { Injectable } from '@nestjs/common'

import { FirestoreService } from '../firestore/firestore.service'
import { Product } from './interface/product.interface'

@Injectable()
export class ProductsService {
  constructor (private readonly db: FirestoreService) {}

  async findAll (): Promise<Product []> {
    return this.db.find('product')
  }

  async findAllByQuery (query: object): Promise<Product []> {
    const filters = []
    for (let key in query) {
      filters.push({
        field: key,
        operator: '==',
        value: query[key]
      })
    }
    return this.db.find('product', filters)
  }

  async findOne (id: string): Promise<object> {
    return this.db.findOne('product', id)
  }
}
