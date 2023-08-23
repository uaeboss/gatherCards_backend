import express from "express";
import cors from "cors";

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: "*" }));
app.use(express.json());
app.use('*', (req, res) => res.sendStatus(404))

app.listen(port, () =>
  console.log(`Server is up and listening: http://localhost:${port}`)
);
