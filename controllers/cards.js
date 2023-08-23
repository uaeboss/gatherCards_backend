import Card from '../models/Card.js';
import asyncHandler from '../utils/asyncHandler.js';
import ErrorResponse from '../utils/ErrorResponse.js';

export const getAllCards = asyncHandler(async (req, res, next) => {
  const cards = await Card.find().populate('seller');
  res.json(cards);
});

export const createCard = asyncHandler(async (req, res, next) => {
  const { body, userID } = req;
  console.log('body:', body);
  console.log('userid:', userID)
  const newCard = await (
    await Card.create({ ...body, seller: userID })
  ).populate('seller');
  res.status(201).json(newCard);
});

export const getSingleCard = asyncHandler(async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const card = await Card.findById(id).populate('seller');
  if (!card)
    throw new ErrorResponse(`Card with id of ${id} doesn't exist`, 404);
  res.send(card);
});