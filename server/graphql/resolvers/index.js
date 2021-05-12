import { userModel, eventModel } from "../../models/index.js";
import { eventQueries, eventMutations } from "./events/index.js";
import { userQueries, userMutations } from "./user/index.js";
import { bookingQueries, bookingMutations } from "./booking/index.js";
import { authQueries } from "./auth/index.js";

export const resolvers = {
  Query: {
    ...eventQueries,
    ...userQueries,
    ...bookingQueries,
    ...authQueries,
  },
  Mutation: {
    ...eventMutations,
    ...userMutations,
    ...bookingMutations,
  },
  Event: {
    creator: async (parent) => {
      return await userModel.findById(parent.creator).populate("creator");
    },
  },
  Booking: {
    event: async (parent) => {
      return await eventModel.findById(parent.event).populate("event");
    },
  },
};
