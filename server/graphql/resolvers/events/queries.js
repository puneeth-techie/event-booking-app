import { eventModel } from "../../../models/index.js";

export const Queries = {
  getAllEvents: async () => {
    try {
      const event = await eventModel.find().populate("creator");
      return event;
    } catch (error) {
      console.log(`GET_ALL_EVENT: ${error.message}`);
    }
  },
};
