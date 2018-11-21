import { Injectable, Inject } from '@nestjs/common'

import { UsersService } from '../users/users.service'

@Injectable()
export class AuthService {
  constructor (
    @Inject('FirestoreService') private readonly service: UsersService
  ) {}

  async validateUser (token: string): Promise<any> {
    return {}
  }
}
