import mongoose from 'mongoose';
const { Schema, model, ObjectId } = mongoose;

const cardSchema = new Schema({
  title: { type: String, required: [true, 'Title is required'] },
  date: { type: Date, default: Date.now },
});

export default model('Card', cardSchema);