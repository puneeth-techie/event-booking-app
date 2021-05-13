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
        login(email: String, password: String): Auth!
        me: User!
        getAllEvents: [Event!]!
        getSingleEvent(eventId: String): Event!
        getMyBookings: [Booking!]!
    }
    type Mutation {
        createEvent(event: eventInput): Event!
        bookEvent(eventId: String): String!
        registerUser(user: userInput): String!
    }
`;

export const typeDefs = [Query, Event, User, Booking, Auth];
