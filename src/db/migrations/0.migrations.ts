import { Kysely, sql } from 'kysely'

export async function up(db: Kysely<any>): Promise<void> {
  await db.schema
    .createTable('users')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar(128)', (col) => col.notNull())
    .addColumn('email', 'varchar(128)', (col) => col.notNull().unique())
    .addColumn('phone', 'varchar(32)')
    .addColumn('updated_at', 'timestamp')
    .addColumn('created_at', 'timestamp', (col) => col.notNull())
    .execute()

  await db.schema
    .createTable('stores')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('name', 'varchar(128)', (col) => col.notNull())
    .addColumn('category', 'varchar(64)', (col) => col.notNull())
    .addColumn('is_listed', 'boolean', (col) => col.defaultTo(true))
    .addColumn('handle', 'varchar(64)', (col) => col.notNull().unique())
    .addColumn('description', 'text')
    .addColumn('updated_at', 'timestamp')
    .addColumn('created_at', 'timestamp', (col) => col.notNull())
    .execute()

  await db.schema
    .createTable('store_users')
    .addColumn('user_id', 'integer', (col) =>
      col.notNull().references('users.id').onDelete('cascade')
    )
    .addColumn('store_id', 'integer', (col) =>
      col.notNull().references('stores.id').onDelete('cascade')
    )
    .addColumn('is_admin', 'boolean', (col) => col.defaultTo(false))
    .addColumn('updated_at', 'timestamp')
    .addColumn('created_at', 'timestamp', (col) => col.notNull())
    .addPrimaryKeyConstraint('store_users_pkey', ['user_id', 'store_id'])
    .execute()

  await db.schema
    .createTable('products')
    .addColumn('id', 'serial', (col) => col.primaryKey())
    .addColumn('title', 'varchar(128)', (col) => col.notNull())
    .addColumn('price', 'numeric(10, 2)', (col) => col.notNull())
    .addColumn('store_id', 'integer', (col) =>
      col.notNull().references('stores.id').onDelete('cascade')
    )
    .addColumn('description', 'text')
    .addColumn('is_listed', 'boolean', (col) => col.defaultTo(true))
    .addColumn('updated_at', 'timestamp')
    .addColumn('created_at', 'timestamp', (col) => col.notNull())
    .execute()
}

export async function down(db: Kysely<any>): Promise<void> {
  await db.schema.dropTable('products').execute()
  await db.schema.dropTable('store_users').execute()
  await db.schema.dropTable('stores').execute()
  await db.schema.dropTable('users').execute()
}
