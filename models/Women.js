import mongoose from "mongoose";

const Schema = mongoose.Schema;

const womenSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Women", womenSchema);
