import express from "express";
import formidable from "express-formidable";
import Cart from "../models/Cart";
const router = express.Router();

router.post("/cart", async (req, res) => {
  const data = req.body;
  console.log(req.body);
  try {
    let cart = new Cart(data);

    cart.save((err, results) => {
      if (err) return res.status(400).send(err.message);
      return res.send(results);
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/cart", async (req, res) => {
  try {
    let cart = await Cart.find().sort("-createdAt").exec();
    res.send(cart);
  } catch (err) {
    console.log("error==>", err);
  }
});

router.put("/cartInProcessing/:id", async (req, res) => {
  console.log("AWA");
  try {
    let cart = await Cart.findByIdAndUpdate(req.params.id, {
      processing: 1,
    });
    res.json(cart);
  } catch (error) {
    console.log(error.message);
  }
});

router.put("/cartInDone/:id", async (req, res) => {
  try {
    let cart = await Cart.findByIdAndUpdate(req.params.id, {
      processing: 2,
    });
    res.json(cart);
  } catch (error) {
    console.log(error.message);
  }
});

router.delete("/cart/:id", async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.send("Done");
  } catch (error) {
    console.log(error.message);
  }
});

module.exports = router;
