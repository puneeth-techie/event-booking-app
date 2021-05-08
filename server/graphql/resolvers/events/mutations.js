import { eventModel } from "../../../models/index.js";

export const Mutations = {
  createEvent: async (_, args) => {
    try {
      const { title, description, price, date } = args.event;
      const event = new eventModel({
        title,
        description,
        price,
        date: new Date(date),
      });
      await event.save();
      return event;
    } catch (error) {
      console.log(`CreatEvent: ${error.message}`);
    }
  },
};
