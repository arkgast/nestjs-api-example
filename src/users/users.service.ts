import { Injectable } from '@nestjs/common'

import { FirestoreService } from '../firestore/firestore.service'

@Injectable()
export class UsersService {
  constructor (private readonly db: FirestoreService) {}

  async findAll () {
    return this.db.find('user')
  }

  async findOne (id: string) {
    return this.db.findOne('user', id)
  }

  async create (document: any) {
    return this.db.create('user', document)
  }

  async update (id: string, document: any) {
    return this.db.update('user', id, document)
  }

  async delete (id: string) {
    return this.db.delete('user', id)
  }
}
