import Router from "express";
import validateJOI from "../middlewares/validateJOI.js";
import { cardSchema } from "../joi/schemas.js";
import { protect } from "../middlewares/auth.js";
import { getSingleCard, getAllCards, createCard, updateCard, deleteCard } from "../controllers/cards.js";

const cardsRouter = Router();

cardsRouter
  .route("/")
  .get(getAllCards)
  .post(validateJOI(cardSchema), protect, createCard);

cardsRouter
.route("/:id")
.get(getSingleCard)
.put(protect, updateCard)
.delete(protect, deleteCard);

export default cardsRouter;
