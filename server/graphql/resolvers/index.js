import { eventQueries, eventMutations } from "./events/index.js";
import { userQueries, userMutations } from "./user/index.js";
import { bookingQueries } from "./booking/index.js";

export const resolvers = {
  Query: {
    ...eventQueries,
    ...userQueries,
    ...bookingQueries,
  },
  Mutation: {
    ...eventMutations,
    ...userMutations,
  },
};
