import { ColumnType } from 'kysely'

type Optional<T> = T | undefined
export type Nullable<T> = T | null

export type MandatoryInsertAndOptionalUpdate<T> = ColumnType<T, T, Optional<T>>
export type OptionalInsertAndNoUpdate<T> = ColumnType<T, Optional<T>, never>
export type OptionalInsertAndUpdate<T> = ColumnType<T, Optional<T>, Optional<T>>
export type NoInsertAndOptionalUpdate<T> = ColumnType<T, never, Optional<T>>
export type NoInsertNorUpdate<T> = ColumnType<T, never, never>
export type MandatoryInsertAndNoUpdate<T> = ColumnType<T, T, never>
// TODO: aparently Kysely does not make it mandatory on updates. Guack
export type NoInsertAndMandatoryUpdate<T> = ColumnType<T, never, T>
