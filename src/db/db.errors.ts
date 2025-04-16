export enum DbErrType {
  DbIOErr = 1
}

export interface DbIOErr {
  type: DbErrType.DbIOErr
}
