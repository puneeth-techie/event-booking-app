import { Event } from "./events/index.js";
import { User } from "./user/index.js";

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
        user: String
        getAllEvent: [Event!]!
    }
    type Mutation {
        createEvent(event: eventInput): Event
        registerUser(user: userInput): String
    }
`;

export const typeDefs = [Query, Event, User];
