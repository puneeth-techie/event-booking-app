import { bookingModel } from "../../../models/index.js";
import { authUser } from "../../../utils/index.js";

export const Queries = {
  getMyBookings: async (_, __, { req }) => {
    try {
      const verifiedUser = await authUser({ req });
      if (!verifiedUser) {
        throw new Error("Authentication required. Please login");
      } else {
        const bookings = await bookingModel.find({ user: verifiedUser._id });
        return bookings;
      }
    } catch (error) {
      console.log(`GET_MY_BOOKINGS: ${error.message}`);
      throw error;
    }
  },
};
