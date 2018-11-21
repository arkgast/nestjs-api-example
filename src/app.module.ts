import { Module } from '@nestjs/common'
import { DatastoreModule } from './datastore/datastore.module'
import { CountriesModule } from './countries/countries.module'
import { CompaniesModule } from './companies/companies.module'
import { ProductsModule } from './products/products.module'
import { PersonsModule } from './persons/persons.module'

@Module({
  imports: [
    DatastoreModule,
    CountriesModule,
    CompaniesModule,
    ProductsModule,
    PersonsModule
  ]
})
export class AppModule {}
