import mongoose from "mongoose";

const Schema = mongoose.Schema;

const couponSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  validity: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Coupon", couponSchema);
