import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userName: {
      type: String,
      required: "Name is required",
    },
    userEmail: {
      type: String,
    },
    userPhone: {
      type: String,
      required: "Phone Number is required",
    },
    userLocation: {
      type: String,
      required: "Location required",
    },
    items: [
      {
        service: {
          type: Schema.Types.ObjectId,
          required: true,
        },
      },
    ],
    time: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
