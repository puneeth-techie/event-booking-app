import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./server/graphql/index.js";

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(() => {
  console.log(`
        Server is up and running!
        Listening on port 4000
        Query at https://studio.apollographql.com/dev
    `);
});
