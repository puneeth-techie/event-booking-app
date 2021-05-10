import { eventModel } from "../../../models/index.js";

export const Queries = {
  getAllEvent: async () => {
    try {
      const event = await eventModel.find();
      return event;
    } catch (error) {
      console.log(`GET_ALL_EVENT: ${error.message}`);
    }
  },
};
