import { eventQueries, eventMutations } from "./events/index.js";
import { userQueries, userMutations } from "./user/index.js";

export const resolvers = {
  Query: {
    ...eventQueries,
    ...userQueries,
  },
  Mutation: {
    ...eventMutations,
    ...userMutations,
  },
};
