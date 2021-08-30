const mongoose = require("mongoose");

const Database = async () => {
  await mongoose.connect(process.env.DB, {}, () => {
    console.log("Database connect successfully");
  });
};

module.exports = Database;
