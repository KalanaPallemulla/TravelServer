import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    userValues: {
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
      // userLocation: {
      //   type: String,
      //   required: "Location required",
      // },
      address: {
        type: String,
        required: true,
      },
      province: {
        type: String,
        required: true,
      },
    },
    cartItems: [
      {
        product: {
          type: Schema.Types.ObjectId,
          required: true,
        },
        name: {
          type: String,
        },
        price: {
          type: Number,
        },
        time: {
          type: String,
        },
        location: {
          type: String,
        },
      },
    ],
    price: {
      type: Number,
      required: true,
    },
    processing: {
      type: Number,
      default: 0,
    },
    // time: {
    //   type: String,
    //   required: true,
    // },
    // date: {
    //   type: String,
    //   required: true,
    // },
  },
  { timestamps: true }
);

export default mongoose.model("Cart", cartSchema);
