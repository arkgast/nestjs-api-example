import { Injectable } from '@nestjs/common'

import { FirestoreService } from '../firestore/firestore.service'
import { Country } from './interfaces/country.interface'

@Injectable()
export class CountriesService {
  constructor (private readonly db: FirestoreService) {}

  async findAll (): Promise<Country []> {
    return this.db.find('country')
  }

  async findOne (id: string): Promise<object> {
    return this.db.findOne('country', id)
  }
}
