const router = require("express").Router();
const Cart = require("../models/Cart");

router.post("/cart", async (req, res) => {
  let cart = new Cart({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    province: req.body.name,
    phone: req.body.name,
    email: req.body.name,
    long: req.body.name,
    lat: req.body.lat,
    serviceType: req.body.serviceType,
  });
  try {
    await cart.save();
    res.send(cart);
  } catch (err) {
    console.error(err.message);
  }
});

router.delete("/cart/remove/:id", async (req, res) => {
  try {
    let cart = await Cart.findById(req.params.id);
    if (!cart) {
      res.status(400).send("Card does not exist");
    }

    await Cart.findByIdAndDelete(req.params.id);
    res.send("Deleted successfully");
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = router;
