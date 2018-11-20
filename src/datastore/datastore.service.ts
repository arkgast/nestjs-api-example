import { Injectable } from '@nestjs/common'
import * as Datastore from '@google-cloud/datastore'
import { v4 as uuid } from 'uuid'

/**
 * In this page there is interesting code about datastore
 * https://github.com/googleapis/nodejs-datastore/blob/master/samples/tasks.js
 */
@Injectable()
export class DatastoreService {
  private readonly db: any

  constructor () {
    this.db = new Datastore({ projectId: process.env.GOOGLE_PROJECT_ID })
  }

  async create (kind: string, data: object, key?: string) {
    if (!key) key = uuid()

    const entityKey = this.db.key([kind, key])

    await this.db.save({ key: entityKey, data })

    return {
      id: key,
      ...data
    }
  }

  async find (kind: string) {
    const query = this.db.createQuery(kind)
    const results = await this.db.runQuery(query)
    const entities = results[0]
    return entities.map(entity => {
      const entityKey = entity[this.db.KEY]
      return {
        id: entityKey.name,
        ...entity
      }
    })
  }

  async findOne (kind: string, id: string) {
    return {}
  }

  async update (kind: string, id: string, data: any) {
    const entityKey = this.db.key([kind, id])
    await this.db.update({ key: entityKey, data })
    return {
      id,
      ...data
    }
  }

  async delete (kind: string, id: string) {
    const key = this.db.key([kind, id])
    const res = await this.db.delete(key)
    return { id }
  }
}
