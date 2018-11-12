import { Module } from '@nestjs/common'
import { FirestoreModule } from './firestore/firestore.module'
import { CountriesModule } from './countries/countries.module'
import { CompaniesModule } from './companies/companies.module'

@Module({
  imports: [FirestoreModule, CountriesModule, CompaniesModule]
})
export class AppModule {}
