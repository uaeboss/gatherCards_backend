import Card from "../models/Card.js";
import asyncHandler from "../utils/asyncHandler.js";
import ErrorResponse from "../utils/ErrorResponse.js";

export const getAllCards = asyncHandler(async (req, res, next) => {
  const cards = await Card.find({available:true}).populate("seller");
  res.json(cards);
});

export const getSingleCard = asyncHandler(async (req, res, next) => {
  const {
    params: { id },
  } = req;
  const card = await Card.findById(id).populate("seller");
  if (!card)
    throw new ErrorResponse(`Card with id of ${id} doesn't exist`, 404);
  res.send(card);
});

export const createCard = asyncHandler(async (req, res, next) => {
  const { body, userID } = req;
  console.log("body:", body);
  console.log("userid:", userID);
  const newCard = await (
    await Card.create({ ...body, seller: userID })
  ).populate("seller");
  res.status(201).json(newCard).send("Success!!!");
});

// export const updateCard = asyncHandler(async (req, res, next) => {
//   const {
//     body,
//     params: { id },
//     userID,
//   } = req;
//   const found = await Card.findById(id);
//   if (!found) throw new ErrorResponse(`The Card ${id} doesn't exist`, 404);
//   if (userID !== found.seller._id.toString())
//     throw new ErrorResponse(`You cant update the Details`, 401);
//   const updatedCard = await (
//     await Card.findOneAndUpdate({ _id: id }, body, {
//       new: true,
//     })
//   ).populate("seller");
//   res.json(updatedCard);
// });

export const updateCard = asyncHandler(async (req, res, next) => {
  const {
    body,
    params: { id },
    userID,
  } = req;
  const found = await Card.findById(id);
  if (!found) throw new ErrorResponse(`The Card ${id} doesn't exist`, 404);
  if (userID !== found.seller._id.toString())
    throw new ErrorResponse(`You cant update the Details`, 401);
  const updatedCard = await (
    await Card.findOneAndUpdate({ _id: id }, body, {
      new: true,
    })
  ).populate("seller");
  res.json(updatedCard);
});

export const deleteCard = asyncHandler(async (req, res, next) => {
  const {
    params: { id },
    userID,
  } = req;
  const found = await Card.findById(id);
  if (!found) throw new Error(`Card with id of ${id} doesn't exist`);
  if (userID !== found.seller._id.toString())
    throw new ErrorResponse(`Please log in to delete this card`, 401);
  await Card.deleteOne({ _id: id });
  res.json({ success: `Card: ${id} was deleted` });
});
