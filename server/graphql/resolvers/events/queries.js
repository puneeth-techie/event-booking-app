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
  getSingleEvent: async (_, args) => {
    try {
      const event = await eventModel.findById(args.eventId);
      if (!event) {
        throw new Error("No event found. Please provide the correct event id.");
      } else {
        return event;
      }
    } catch (error) {
      console.log(`GET_SINGLE_EVENT: ${error.message}`);
      throw error;
    }
  },
};
