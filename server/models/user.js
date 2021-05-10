import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdEvent: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "eventModel",
    },
  ],
});

export const User = mongoose.model("User", userSchema);
