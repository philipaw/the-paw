import { Client } from 'pg'

export const client = ({ user, host, database, password, port }: Record<string, string | undefined>): Client =>
  new Client({
    user,
    host,
    database,
    password,
    port: Number(port),
  })
