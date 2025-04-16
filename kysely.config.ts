import { PostgresDialect } from 'kysely'
import { defineConfig } from 'kysely-ctl'
import { Pool } from 'pg'

export default defineConfig({
  dialect: new PostgresDialect({
    pool: new Pool({
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '5432'),
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME
    })
  }),
  migrations: {
    migrationFolder: './src/db/migrations'
  }
})
