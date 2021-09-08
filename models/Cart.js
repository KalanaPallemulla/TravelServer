const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cartSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
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
