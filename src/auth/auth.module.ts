import { Module } from '@nestjs/common'

import { AuthService } from './auth.service'
import { UsersModule } from '../users/users.module'
import { HttpStrategy } from './http.strategy'

@Module({
  imports: [UsersModule],
  providers: [AuthService, HttpStrategy]
})
export class AuthModule {}
