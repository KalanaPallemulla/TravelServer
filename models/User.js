import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    email: {
      type: String,
      required: "Email is required",
    },
    phone: {
      type: String,
      required: "Phone Number is required",
    },
    location: {
      type: String,
      required: "Location required",
    },
    password: {
      type: String,
      required: "Password is required",
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
