import { Injectable } from '@nestjs/common'

import { Company } from './interfaces/company.interface'
import { FirestoreService } from '../firestore/firestore.service'

@Injectable()
export class CompaniesService {
  constructor (private readonly db: FirestoreService) {}

  async findAll (): Promise<Company[]> {
    return this.db.find('company')
  }

  async findOne (id: string): Promise<object> {
    return this.db.findOne('company', id)
  }

  async findAllByCountry (country: string) {
    const filters = [
      {
        field: 'country',
        operator: '==',
        value: country
      }
    ]
    return this.db.find('company', filters)
  }
}
