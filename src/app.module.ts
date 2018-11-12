import { Module } from '@nestjs/common'
import { FirestoreModule } from './firestore/firestore.module'
import { CountriesModule } from './countries/countries.module'
import { CompaniesModule } from './companies/companies.module'
import { ProductsModule } from './products/products.module'

@Module({
  imports: [
    FirestoreModule,
    CountriesModule,
    CompaniesModule,
    ProductsModule
  ]
})
export class AppModule {}
