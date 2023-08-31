import "./db/index.js"
import express from "express";
import cors from "cors";
import cardsRouter from "./routes/cardsRouter.js";
import authRouter from "./routes/authRouter.js";
import errorHandler from "./middlewares/Errorhandler.js";

const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Hi, first page is working fine so far');
})
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "/https://?[-a-zA-Z0-9@:%._+~#=]{1,256}.netlify.app/",
    ],
  })
);

app.use(express.json());
app.use("/auth", authRouter);
app.use("/cards", cardsRouter);
app.use("*", (req, res) => res.sendStatus(404));
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server is up and listening: http://localhost:${port}`)
);
