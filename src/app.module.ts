import { Module } from '@nestjs/common'
import { FirestoreModule } from './firestore/firestore.module'
import { DatastoreModule } from './datastore/datastore.module'
import { CountriesModule } from './countries/countries.module'
import { CompaniesModule } from './companies/companies.module'
import { ProductsModule } from './products/products.module'
import { UsersModule } from './users/users.module'
// import { AuthModule } from './auth/auth.module'

@Module({
  imports: [
    FirestoreModule,
    CountriesModule,
    CompaniesModule,
    ProductsModule,
    DatastoreModule,
    UsersModule
  ]
})
export class AppModule {}
