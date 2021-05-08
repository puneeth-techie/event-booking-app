import mongoose from "mongoose";
import { env } from "../config/index.js";

export const connectDB = async () => {
  try {
    const URL = `mongodb+srv://${env.dev.MONGO_USERNAME}:${env.dev.MONGO_PASSWORD}@event-booking-app.gyzbb.mongodb.net/${env.dev.MONGO_DB}?retryWrites=true&w=majority`;
    const conn = await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
    console.log(`
            DATABASE: Connect to the DB successfully..!
            DB_HOST: ${conn.connection.host}
        `);
  } catch (error) {
    console.log(`DATABASE: ${error.message}`);
    process.exit(1);
  }
};
