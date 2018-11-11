import { Module } from '@nestjs/common'
import { FirestoreService } from './firestore.service'
import { CountriesController } from './countries/countries.controller'
import { CountriesService } from './countries/countries.service'
import { CountriesModule } from './countries/countries.module'

@Module({
  imports: [CountriesModule],
  controllers: [CountriesController],
  providers: [FirestoreService, CountriesService]
})
export class AppModule {}
