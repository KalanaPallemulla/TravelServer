const express = require("express");
const Database = require("./database/dbConnection");
const fs = require("fs");
require("dotenv").config();

const app = express();
app.use(express.json());
Database();

fs.readdirSync("./routers").map((r) =>
  app.use("/api", require(`./routers/${r}`))
);

port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));
