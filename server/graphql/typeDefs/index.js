import { eventTypeDefs } from "./events";
import { userTypeDefs } from "./user";

const typeDefs = {
  ...eventTypeDefs,
  ...userTypeDefs,
};

export default typeDefs;
