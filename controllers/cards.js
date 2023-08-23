import Card from '../models/Card.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllCards = asyncHandler(async (req, res, next) => {
  const cards = await Card.find().populate('author');
  res.json(cards);
});

export const createCard = asyncHandler(async (req, res, next) => {
  const { body, userId } = req;
  const newCard = await (
    await Card.create({ ...body, author: userId })
  ).populate('author');
  res.status(201).json(newCard);
});

export const getSingleCard = asyncHandler(async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const post = await Card.findById(id).populate('author');
  if (!card)
    throw new ErrorResponse(`Card with id of ${id} doesn't exist`, 404);
  res.send(card);
});