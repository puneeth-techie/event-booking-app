import { authUser } from "../../../utils/index.js";

export const Queries = {
  me: async (_, __, { req }) => {
    try {
      const user = authUser({ req });
      if (!user) {
        throw new Error("Not authorized.");
      } else {
        return user;
      }
    } catch (error) {
      console.log(`ME: ${error.message}`);
      throw error;
    }
  },
};
