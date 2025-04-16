import { Inject, Injectable } from '@nestjs/common';
import { Kysely } from 'kysely';
import { Db } from './db.schema';

@Injectable()
export class DbService {
  constructor(
    @Inject('DATABASE_CONNECTION')
    private readonly dbInstance: Kysely<Db>,
  ) {}

  get db() {
    return this.dbInstance;
  }
}
