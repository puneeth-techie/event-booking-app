import { bookingModel, eventModel } from "../../../models/index.js";
import { authUser } from "../../../utils/index.js";

export const Mutations = {
  bookEvent: async (_, args, { req }) => {
    try {
      const verifiedUser = await authUser({ req });
      if (!verifiedUser) {
        throw new Error("Authentication required. Please login.");
      } else {
        const valideEvent = await eventModel.findById(args.eventId);
        if (!valideEvent) {
          throw new Error("Not a valid event id. Try again.");
        } else {
          const booking = new bookingModel({
            event: valideEvent._id,
            user: verifiedUser._id,
          });
          await booking.save();
          return `Successfully booked ${valideEvent.title}..!`;
        }
      }
    } catch (error) {
      console.log(`BOOK_EVENT: ${error.message}`);
      throw error;
    }
  },
};
