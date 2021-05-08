import { eventQueries } from "./events/index.js";
import { userQueries } from "./user/index.js";

export const resolvers = {
  Query: {
    ...eventQueries,
    ...userQueries,
  },
};
