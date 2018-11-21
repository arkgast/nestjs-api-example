import { Injectable } from '@nestjs/common'
import * as admin from 'firebase-admin'

import { Firestore } from './interfaces/firestore.interface'
const serviceAccount = require('./ServiceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

@Injectable()
export class FirestoreService {
  private readonly db: any

  constructor () {
    const settings = { timestampsInSnapshots: true }
    this.db = admin.firestore()
    this.db.settings(settings)
  }

  async find (collection: string, filters: Firestore[] = []): Promise<any[]> {
    const objects = []
    let query = this.db.collection(collection)

    filters.forEach(filter => {
      query = query.where(filter.field, filter.operator, filter.value)
    })

    const snapshot = await query.get()
    snapshot.forEach(doc => {
      objects.push({
        id: doc.id,
        ...doc.data()
      })
    })
    return objects
  }

  async findOne (collection: string, id: string): Promise<object> {
    const doc = await this.db
      .collection(collection)
      .doc(id)
      .get()
    return {
      id: doc.id,
      ...doc.data()
    }
  }

  async create (collection: string, document: any): Promise<object> {
    const ref = await this.db.collection(collection).add(document)
    return {
      id: ref.id,
      ...document
    }
  }

  async update (collection: string, id: string, document: any) {
    await this.db
      .collection(collection)
      .doc(id)
      .update(document)
    return { id, ...document }
  }

  async delete (collection: string, id: string) {
    await this.db
      .collection(collection)
      .doc(id)
      .delete()
    return id
  }
}
