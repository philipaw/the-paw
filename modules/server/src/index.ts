import dotenv from 'dotenv'
import { client } from './database'
import { ApolloServer } from 'apollo-server'
import { typeDefs } from '@paw/core'
import { TimeRecordMutations, TimeRecordQueries } from './resolvers'

const env = dotenv.config()

if (env.error) {
  throw env.error
}

const dbcli = client({
  user: env?.parsed?.dbuser,
  host: env?.parsed?.host,
  database: env?.parsed?.database,
  password: env?.parsed?.password,
  port: env?.parsed?.port,
})

const resolvers = {
  Query: {
    ...TimeRecordQueries,
  },
  Mutation: {
    ...TimeRecordMutations,
  },
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async () => ({
    db: dbcli,
  }),
})

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`)
})
