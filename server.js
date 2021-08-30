const express = require("express");
const Database = require("./database/dbConnection");
require("dotenv").config();

const app = express();
Database();

port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port: ${port}`));
