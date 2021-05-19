import { eventModel, userModel } from "../../../models/index.js";
import { authUser } from "../../../utils/index.js";

export const Mutations = {
  createEvent: async (_, args, { req }) => {
    try {
      const verifiedUser = await authUser({ req });
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
        const user = await userModel.findById(verifiedUser._id);
        if (!user) {
          throw new Error("User not found.");
        } else {
          user.createdEvents.push(event._id);
          await user.save();
        }
        return event;
      }
    } catch (error) {
      console.log(`CreatEvent: ${error.message}`);
    }
  },
  deleteEvent: async (_, args, { req }) => {
    try {
      const verifiedUser = await authUser({ req });
      if (!verifiedUser) {
        throw new Error(
          "Authentication required. Valid auth headers required."
        );
      } else {
        const event = await eventModel.deleteOne(args.eventId);
        if (!event) {
          throw new Error("No event found with the given id.");
        } else {
          return `${args.eventId} event successfully deleted.`;
        }
      }
    } catch (error) {
      console.log(`DELETE_EVENT: ${error.message}`);
      throw error;
    }
  },
};
