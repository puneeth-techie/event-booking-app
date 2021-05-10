import { userModel } from "../../../models/index.js";
import bcrypt from "bcryptjs";

export const Mutations = {
  registerUser: async (_, args) => {
    try {
      const { firstName, lastName, email, password } = args.user;
      const oldUser = await userModel.findOne({ email });
      if (!oldUser) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new userModel({
          firstName,
          lastName,
          email,
          password: hashedPassword,
        });
        if (!user) {
          throw new Error("User registration failed.");
        } else {
          await user.save();
          return `
                      Hi, ${user.firstName} ${user.lastName}
                      Registration successfull. Please login.
                  `;
        }
      } else {
        throw new Error("User with the given email id already registered.");
      }
    } catch (error) {
      console.log(`REGISTER_USER: ${error.message}`);
      return `${error.message}`;
    }
  },
};
