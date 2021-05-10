import { userModel } from "../../../models/index.js";
import bcrypt from "bcryptjs";
import { generateToken } from "../../../utils/index.js";

export const Queries = {
  login: async (_, args) => {
    try {
      const { email, password } = args;
      const user = await userModel.findOne({ email });
      if (!user) {
        throw new Error(
          "The given email not found. Please check email or register."
        );
      } else {
        const hashedPassword = await bcrypt.compare(password, user.password);
        if (!hashedPassword) {
          throw new Error("Incorrect Password.");
        } else {
          const token = generateToken(user);
          return {
            userId: user._id,
            ...token,
          };
        }
      }
    } catch (error) {
      console.log(`LOGIN: ${error.message}`);
      throw error;
    }
  },
};
