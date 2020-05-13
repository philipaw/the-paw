import { ApolloServer, makeExecutableSchema } from 'apollo-server'
import { Group, Thing, User, typeDefs } from '@paw/core'

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

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
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  resolverValidationOptions: { requireResolversForResolveType: false },
})

const server = new ApolloServer({ schema })

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
