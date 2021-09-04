const express = require("express");
const config = require("config");
const connectDB = require("./config/db");
const cors = require("cors");
const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

connectDB();

PORT = config.get("PORT") || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
