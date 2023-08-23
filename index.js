import express from "express";
import cors from "cors";
import cardsRouter from "./routes/cardRouter.js";
import authRouter from "./routes/authRouter.js";
import errorHandler from "./middlewares/Errorhandler.js";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use("/auth", authRouter);
app.use("/cards", cardsRouter);
app.use("*", (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is up and listening: http://localhost:${port}`)
);
