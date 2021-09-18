import mongoose from "mongoose";

export const database = async () => {
  await mongoose.connect(process.env.DB, {}, () => {
    console.log("DB connection successfully");
  });
};
