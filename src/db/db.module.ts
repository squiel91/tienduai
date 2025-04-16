import { Global, Module } from '@nestjs/common'
import { DbProvider } from './db.provider'
import { DbService } from './db.service'
import { DbConfig } from './db.config'

@Global()
@Module({
  providers: [DbProvider, DbService, DbConfig],
  exports: [DbService]
})
export class DbModule {}
