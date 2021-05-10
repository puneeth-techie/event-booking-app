import { env } from "./server/config/index.js";
import { connectDB } from "./server/db/index.js";
import { ApolloServer } from "apollo-server";
import { resolvers, typeDefs } from "./server/graphql/index.js";
import { getVerifiedUser } from "./server/utils/index.js";

/** Init Apollo Server */
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    try {
      const token = req.headers.authorization;
      const user = await getVerifiedUser(token);
      return { user };
    } catch (error) {
      console.log(`Context: ${error.message}`);
      throw error;
    }
  },
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

/** Starting MongoDB database */
await connectDB();
