import { eventQueries } from "./events";
import { userQueries } from "./user";

const resolvers = {
  Query: {
    ...eventQueries,
    ...userQueries,
  },
};

export default resolvers;
