import { bookingModel } from "../../../models/index.js";

export const Queries = {
  getMyBookings: async () => {
    try {
      const bookings = await bookingModel.find();
      return bookings;
    } catch (error) {
      console.log(`GET_ALL_BOOKINGS: ${error.message}`);
      throw error;
    }
  },
};
