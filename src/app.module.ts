import { Module } from '@nestjs/common'
import { FirestoreModule } from './firestore/firestore.module'
import { DatastoreModule } from './datastore/datastore.module'
import { CountriesModule } from './countries/countries.module'
import { CompaniesModule } from './companies/companies.module'
import { ProductsModule } from './products/products.module'
import { PersonsModule } from './persons/persons.module'
// import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    FirestoreModule,
    CountriesModule,
    CompaniesModule,
    ProductsModule,
    DatastoreModule,
    PersonsModule
  ]
})
export class AppModule {}
