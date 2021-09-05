const express = require("express");
const Cart = require("../models/Cart");
const auth = require("../middleware/auth");

const router = express.Router();

router.post("/cart/addtocart", auth, async (req, res) => {
  console.log("User====>", req.user.id);
  console.log("Services====>", req.body.serviceType);
  //   let cart = new Cart({
  //     user: req.user.id,
  //     services: req.body.services,
  //   });
  //   cart.save();
  //   res.json({ cart });
});

module.exports = router;
