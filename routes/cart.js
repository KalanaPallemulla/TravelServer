import express from "express";
import formidable from "express-formidable";
import Cart from "../models/Cart";

const router = express.Router();

router.post("/addtocartmen", async (req, res) => {
  const data = req.body;
  try {
    let cart = new Cart(data);

    cart.save((err, result) => {
      if (err) {
        return res.status(400).send(err);
      }
      res.json(result);
    });
  } catch (error) {
    console.log("error==>", error);
  }
});

router.get("/menCart", async (req, res) => {
  try {
    let cart = await Cart.find({}).exec();
    res.json(cart);
    // cart.items.map(async (service) => {
    //   let men = await Men.findById(service.service);
    //   res.json(service);
    // });
  } catch (err) {
    console.log("error==>", err);
  }
});

// router.get("/menCartId/:id", async (req, res) => {
//   try {
//     let cart = await Cart.findById(req.params.id);

//     cart.items.map(async (service) => {
//       let men = await Men.findById(service.service);

//       res.json(cart + men);
//     });
//   } catch (err) {
//     console.log("error==>", err);
//   }
// });

module.exports = router;
