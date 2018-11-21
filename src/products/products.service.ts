import { Injectable } from '@nestjs/common'

import { Product } from './interface/product.interface'
import { DatastoreService } from '../datastore/datastore.service'

const KIND_NAME = 'Product'

@Injectable()
export class ProductsService {
  constructor (private readonly db: DatastoreService) {}

  async findAll (queryObject?: object): Promise<Product[]> {
    return this.db.find(KIND_NAME, queryObject)
  }

  async findOne (id: string): Promise<object> {
    return this.db.findOne(KIND_NAME, id)
  }

  async create (entity: any) {
    return this.db.create(KIND_NAME, entity)
  }

  async update (id: string, entity: any) {
    return this.db.update(KIND_NAME, id, entity)
  }

  async delete (id: string) {
    return this.db.delete(KIND_NAME, id)
  }
}
