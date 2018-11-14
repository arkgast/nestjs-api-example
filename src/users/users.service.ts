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

  async findOneByToken (token: string) {
    return this.db.findOneByToken('user', token)
  }
}
