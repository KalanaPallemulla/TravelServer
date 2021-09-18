import express from "express";
import { database } from "./database/db";
import fs from "fs";
import cors from "cors";
import morgan from "morgan";
require("dotenv").config();

const app = express();
app.use(cors());
app.use(morgan("dev"));

database();

fs.readdirSync("./routes").map((r) =>
  app.use("/api", require(`./routes/${r}`))
);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
