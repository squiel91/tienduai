import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

@Injectable()
export class DbConfig {
  constructor(private configService: ConfigService) {}

  get port() {
    return parseInt(this.configService.get<string>('DB_PORT') ?? '') || 5432
  }

  get host() {
    return this.configService.get<string>('DATABASE_HOST') || 'localhost'
  }

  get user() {
    const user = this.configService.get<string>('DATABASE_USER')
    if (!user) throw new Error('DATABASE_USER env var is required')
    return user
  }

  get pass() {
    const pass = this.configService.get<string>('DATABASE_PASSWORD')
    if (!pass) throw new Error('DATABASE_PASSWORD env var is required')
    return pass
  }

  get name() {
    const name = this.configService.get<string>('DATABASE_NAME')
    if (!name) throw new Error('DATABASE_NAME env var is required')
    return name
  }
}
