import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: [true, "Username is required!"] },
  first_name: { type: String, required: [true, "First name is required!"] },
  last_name: { type: String, required: [true, "Last name is required!"] },
  email: { type: String, required: [true, "Email is required!"] },
  password: {
    type: String,
    required: [true, "Password is required!"],
    select: false,
  },
  createdAt: { type: Date, default: Date.now}
});

export default model("User", userSchema);
