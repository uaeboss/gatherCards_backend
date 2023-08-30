import mongoose from "mongoose";
const { Schema, model, ObjectId } = mongoose;

const cardSchema = new Schema(
  {
    id: { type: String, required: [true, "id is required"] },
    name: { type: String, required: [true, "Name is required"] },
    qty: { type: Number, required: true, default: 1 },
    price: { type: Number, required: true },
    image: { type: String },
    available: {
      type: Boolean,
      required: [true, "Title is required"],
      default: true,
    },
    seller: {
      type: ObjectId,
      ref: "User",
      required: [true, "Seller is required"],
    },
    color: { type: Array },
  },
  {
    timestamps: true,
  }
);

export default model("Card", cardSchema);
