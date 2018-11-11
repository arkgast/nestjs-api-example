import { Module, Global } from '@nestjs/common'
import { FirestoreService } from './firestore.service'

@Global()
@Module({
  providers: [FirestoreService],
  exports: [FirestoreService]
})
export class FirestoreModule {}
