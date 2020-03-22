import * as fs from 'fs'
import * as path from 'path'

export const typeDefs = fs.readFileSync(path.join(__dirname, '../graphql/schema.graphql'), 'utf8').toString()
