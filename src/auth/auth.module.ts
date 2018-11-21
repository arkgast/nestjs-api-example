import { Module } from '@nestjs/common'

import { AuthService } from './auth.service'
import { PersonsModule } from '../persons/persons.module'
import { HttpStrategy } from './http.strategy'

@Module({
  imports: [PersonsModule],
  providers: [AuthService, HttpStrategy]
})
export class AuthModule {}
