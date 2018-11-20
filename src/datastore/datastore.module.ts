import { Module, Global } from '@nestjs/common'
import { DatastoreService } from './datastore.service'

@Global()
@Module({
  providers: [DatastoreService],
  exports: [DatastoreService]
})
export class DatastoreModule {}
