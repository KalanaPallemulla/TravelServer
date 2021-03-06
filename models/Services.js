import mongoose from "mongoose";

const Schema = mongoose.Schema;

const serviceSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    features: {
      type: [String],
    },
    price: {
      type: Number,
      required: "Price is required",
    },
    category: {
      type: String,
      required: true,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
    video: {
      type: String,
    },
    time: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: "Location is required",
    },
    serviceType: {
      type: String,
      required: "Type is required",
    },
    icons: {
      type: Buffer,
      contentType: String,
    },
    video: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Service", serviceSchema);
