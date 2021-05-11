import { ApolloServer } from "apollo-server-express";
import { env } from "../config/index.js";
import { resolvers, typeDefs } from "../graphql/index.js";
import { getVerifiedUser } from "../utils/index.js";
import { app } from "../startup/index.js";

/** Init Apollo Server */
export const startApolloServer = async () => {
  try {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      context: async ({ req }) => {
        const token = req.headers.authorization;
        const user = await getVerifiedUser(token);
        return { user };
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

    await server.start();

    /** adding express middleware */
    server.applyMiddleware({ app });
  } catch (error) {
    console.log(`START_APOLLO_SERVER: ${error.message}`);
    throw error;
  }
};
