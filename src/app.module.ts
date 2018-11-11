import { Module } from '@nestjs/common'

import { FirestoreModule } from './firestore/firestore.module'
import { CountriesModule } from './countries/countries.module'

@Module({
  imports: [FirestoreModule, CountriesModule]
})
export class AppModule {}
