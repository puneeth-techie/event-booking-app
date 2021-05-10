import jwt from "jsonwebtoken";
import { env } from "../config/index.js";

export const generateJWT = (user) => {
  try {
    const { _id, email } = user;
    return jwt.sign({ _id, email }, env.dev.JWT_SECRET, {
      expiresIn: "15m",
    });
  } catch (error) {
    console.log(`GENERATE_JWT: ${error.message}`);
    throw error;
  }
};
