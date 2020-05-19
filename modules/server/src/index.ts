import dotenv from 'dotenv'
import { client } from './database'
import { ApolloServer } from 'apollo-server'
import { Group, Thing, User, typeDefs } from '@paw/core'
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

const users: User[] = [
  {
    id: '1',
    email: 'philip@paw.com',
    name: 'Philip',
    password: '123',
  },
  {
    id: '2',
    email: 'alec@paw.com',
    name: 'Alec',
    password: '123',
  },
]

const groups: Group[] = [
  {
    id: '3',
    name: 'Bot Lane',
    members: [],
  },
  {
    id: '4',
    name: 'Just Philip',
    members: [],
  },
]

const things: Thing[] = [
  {
    id: '5',
    name: 'T-Shirt',
    accountValue: 100,
    meta: [],
  },
]

const resolvers = {
  Query: {
    users: (): User[] => users,
    groups: (): Group[] => groups,
    things: (): Thing[] => things,
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
    db: await dbcli.connect(),
  }),
})

// The `listen` method launches a web server.
server.listen().then(({ url }: { url: string }) => {
  console.log(`🚀  Server ready at ${url}`)
})
