import { Kysely, PostgresDialect, PostgresPool } from 'kysely';
import { Pool, PoolConfig } from 'pg';
import { Db } from './db.schema';
import { DbConfig } from './db.config';

export const DbProvider = {
  provide: 'DATABASE_CONNECTION',
  inject: [DbConfig],
  useFactory: (dbConfig: DbConfig) => {
    const options: PoolConfig = {
      host: dbConfig.host,
      port: dbConfig.port,
      user: dbConfig.user,
      password: dbConfig.pass,
      database: dbConfig.name,
    };

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const pool = new Pool(options) as PostgresPool;
    const dialect = new PostgresDialect({ pool });

    return new Kysely<Db>({
      dialect,
    });
  },
};
