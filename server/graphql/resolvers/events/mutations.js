import { eventModel } from "../../../models/index.js";

export const Mutations = {
  createEvent: async (_, args, context) => {
    try {
      const verifiedUser = await context.user;
      if (!verifiedUser) {
        throw new Error("No authorization. Invalid token please login.");
      } else {
        const { title, description, price, date } = args.event;
        const event = new eventModel({
          title,
          description,
          price,
          date: new Date(date),
          creator: verifiedUser._id,
        });
        await event.save();
        return event;
      }
    } catch (error) {
      console.log(`CreatEvent: ${error.message}`);
    }
  },
};
