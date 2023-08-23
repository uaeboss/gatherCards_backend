import mongoose from "mongoose";
const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: [true, "Username is required!"] },
  first_name: { type: String, required: [true, "First name is required!"] },
  last_name: { type: String, required: [true, "Last name is required!"] },
  email: { type: String, required: [true, "Email is required!"] },
  address: {
    street: { type: String, required: [true, "Street is required!"] },
    city: { type: String, required: [true, "City is required!"] },
    zip: { type: Number, required: [true, "Zip is required!"] },
  },
  age: { type: Number, min: 18, max: 65, required: [true, "Age is required!"] },
  password: {
    type: String,
    required: [true, "Password is required!"],
    select: false,
  },
  createdAt: { type: Date, default: Date.now },
});

export default model("User", userSchema);
