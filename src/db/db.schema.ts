import { Generated } from 'kysely'
import {
  MandatoryInsertAndNoUpdate,
  MandatoryInsertAndOptionalUpdate,
  NoInsertAndMandatoryUpdate,
  Nullable,
  OptionalInsertAndUpdate
} from './db.types'

interface UsersTable {
  id: Generated<number>
  name: MandatoryInsertAndOptionalUpdate<string>
  email: MandatoryInsertAndOptionalUpdate<string>
  phone: OptionalInsertAndUpdate<Nullable<string>>

  created_at: MandatoryInsertAndNoUpdate<string>
  updated_at: NoInsertAndMandatoryUpdate<Nullable<string>>
}

interface StoresTable {
  id: Generated<number>
  name: MandatoryInsertAndOptionalUpdate<string>
  category: MandatoryInsertAndOptionalUpdate<string>
  is_listed: OptionalInsertAndUpdate<boolean>
  handle: MandatoryInsertAndOptionalUpdate<string>
  description: OptionalInsertAndUpdate<Nullable<string>>

  created_at: MandatoryInsertAndNoUpdate<string>
  updated_at: NoInsertAndMandatoryUpdate<Nullable<string>>
}

interface StoreUsersTable {
  user_id: MandatoryInsertAndOptionalUpdate<number>
  store_id: MandatoryInsertAndOptionalUpdate<number>
  is_admin: OptionalInsertAndUpdate<boolean>

  created_at: MandatoryInsertAndNoUpdate<string>
  updatedAt: NoInsertAndMandatoryUpdate<Nullable<string>>
}

interface ProductsTable {
  id: Generated<number>
  title: MandatoryInsertAndOptionalUpdate<string>
  price: MandatoryInsertAndOptionalUpdate<number>
  store_id: MandatoryInsertAndOptionalUpdate<number> // foreign key to stores.id
  description: OptionalInsertAndUpdate<Nullable<string>>
  is_listed: OptionalInsertAndUpdate<boolean>

  created_at: MandatoryInsertAndNoUpdate<string>
  updatedAt: NoInsertAndMandatoryUpdate<Nullable<string>>
}

export interface Db {
  users: UsersTable
  stores: StoresTable
  store_users: StoreUsersTable
  products: ProductsTable
}

// export type Language = Selectable<LanguagesTable>
// export type NewLanguage = Insertable<LanguagesTable>
// export type UpdateLanguage = Updateable<LanguagesTable>

// export type Podcast = Selectable<PodcastsTable>
// export type NewPodcast = Insertable<PodcastsTable>
// export type UpdatePodcast = Updateable<PodcastsTable>

// export type Episode = Selectable<EpisodesTable>
// export type NewEpisode = Insertable<EpisodesTable>
// export type UpdateEpisode = Updateable<EpisodesTable>

// export type SelectableUser = Selectable<UsersTable>
// export type NewUser = Insertable<UsersTable>
// export type UpdateUser = Updateable<UsersTable>
