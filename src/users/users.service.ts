import { Injectable } from '@nestjs/common'

import { DatastoreService } from '../datastore/datastore.service'

const KIND_NAME = 'Person'

@Injectable()
export class UsersService {
  constructor (private readonly db: DatastoreService) {}

  async findAll () {
    return this.db.find(KIND_NAME)
  }

  async findOne (id: string) {
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
