import jwt from "jsonwebtoken";
import ErrorResponse from "../utils/ErrorResponse";
import asyncHandler from "../utils/asyncHandler";

export const protect = asyncHandler(async(req, res, next, err))