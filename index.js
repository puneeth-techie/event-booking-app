import { env } from "./server/config/config.js";
import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./server/graphql/index.js";

/** Init Apollo Server */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground:
    env.dev.NODE_ENV !== "development"
      ? false
      : {
          settings: {
            "request.credentials": "include",
          },
        },
});

/** Starting Apollo Server */
server.listen(env.dev.PORT).then(() => {
  console.log(`
        Server is up and running!
        Listening on port ${env.dev.PORT}
        Query at ${env.dev.APOLLO_URL}
    `);
});
