import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/ErrorResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

export const protect = asyncHandler(async (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) throw new ErrorResponse("You are not logged in!", 401);

  const [, token] = bearer.split(" ");

  if (!token) throw new ErrorResponse("Not a valid token!", 401);

  const user = jwt.verify(token, process.env.JWT_SECRET);
  req.userID = user.id;
  next();
});
