const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  province: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: { type: String },
  location: [
    {
      long: { type: String, required: true },
      lat: { type: String, required: true },
    },
  ],
  serviceType: [
    {
      service: {
        type: Schema.Types.ObjectId,
        ref: "Service",
      },
    },
  ],
});

module.exports = mongoose.model("Cart", cartSchema);
