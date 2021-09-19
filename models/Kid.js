import mongoose from "mongoose";

const Schema = mongoose.Schema;

const kidSchema = new Schema(
  {
    name: {
      type: String,
      required: "Name is required",
    },
    features: [
      {
        name: {
          type: String,
          max: 300,
        },
      },
    ],
    price: {
      type: Number,
      required: "Price is required",
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "category",
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
      required: "Time is required",
    },
    location: {
      type: String,
      required: "Location is required",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Kids", kidSchema);
