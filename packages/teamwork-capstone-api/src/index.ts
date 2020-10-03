import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  const headers  = req.headers;
  console.log(headers);
  res
    .send({ username: "donaldkibet", url: "https://github.com/donaldkibet" })
    .status(200);
});

const server = app.listen(PORT, () => {
  console.log(`Server Listening at port ${PORT}`);
});
