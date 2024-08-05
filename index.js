import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";
dotenv.config();

import { dbConnect } from "./config/mongo.js";
import router from "./app/routes/index.js";

const app = express();
const port = parseInt(process.env.PORT) || 3000;

app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.use("/api", router);

try {
  dbConnect();
} catch (error) {
  console.log(error);
}

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
