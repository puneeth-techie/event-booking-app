import { Event } from "./events/index.js";
import { User } from "./user/index.js";
import { Booking } from "./booking/index.js";
import { Auth } from "./auth/index.js";

const Query = `
    input eventInput {
        title: String!
        description: String!
        price: Int
        date: String!
    }
    input userInput {
        firstName: String!
        lastName: String!
        email: String!
        password: String!
    }
    type Query {
        me: User!
        getAllEvents: [Event!]!
        getMyBookings: [Booking!]!
        login(email: String, password: String): Auth!
    }
    type Mutation {
        createEvent(event: eventInput): Event!
        registerUser(user: userInput): String!
        bookEvent(eventId: String): String!
    }
`;

export const typeDefs = [Query, Event, User, Booking, Auth];
