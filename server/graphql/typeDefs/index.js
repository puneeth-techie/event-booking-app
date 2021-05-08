import { Event } from "./events/index.js";
import { User } from "./user/index.js";

const Query = `
    type Query {
        user(userName: String): String
        event(eventName: String): String
    }
`;

export const typeDefs = [Query, Event, User];
