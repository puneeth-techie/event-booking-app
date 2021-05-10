import jwt, { decode } from "jsonwebtoken";
import { env } from "../config/index.js";
import { userModel } from "../models/index.js";

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

export const verifyToken = async (token) => {
  try {
    const decoded = jwt.verify(token, env.dev.JWT_SECRET);
    const user = await userModel.findById(decoded._id);
    return user;
  } catch (error) {
    console.log(`VERIFY_TOKEN: ${error.message}`);
    throw error;
  }
};
