import { Event } from "./events/index.js";
import { User } from "./user/index.js";

const Query = `
    input eventInput {
        title: String!
        description: String!
        price: Int
        date: String!
    }
    type Query {
        user(userName: String): String
        event(eventName: String): String
    }
    type Mutation {
        createEvent(event: eventInput): Event
    }
`;

export const typeDefs = [Query, Event, User];
