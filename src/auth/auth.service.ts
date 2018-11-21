import { Injectable, Inject } from '@nestjs/common'

import { PersonsService } from '../persons/persons.service'

@Injectable()
export class AuthService {
  constructor (
    @Inject('FirestoreService') private readonly service: PersonsService
  ) {}

  async validateUser (token: string): Promise<any> {
    return {}
  }
}
