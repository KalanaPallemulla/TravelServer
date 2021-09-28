import express from "express";
import formidable from "express-formidable";
import Coupon from "../models/Coupon";

const router = express.Router();

router.post("/coupon", formidable(), async (req, res) => {
  try {
    const data = req.fields;

    if (!data.name) {
      return res.status(400).send("Coupon name is required");
    }
    if (!data.discount) {
      return res.status(400).send("Discount value is required");
    }
    const { name } = data;
    let coupon = await Coupon.findOne({ name });
    if (coupon) {
      return res.status(400).send("This coupon is already exist");
    }
    coupon = new Coupon(data);
    await coupon.save((err, result) => {
      if (err) return res.status(400).send("Server Error");
      return res.json(result);
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/coupon", async (req, res) => {
  let coupon = await Coupon.find({}).exec();

  return res.json(coupon);
});

router.get("/coupon/:name", async (req, res) => {
  let name = req.params.name;
  // res.send(name);
  let coupon = await Coupon.findOne({ name });
  if (!coupon) {
    return res.status(400).send("Coupon dose not exist");
  }

  return res.json(coupon);
});

// router.put("/coupon/:name", formidable(), async (req, res) => {
//   // let name = req.params.name;

//   // let coupon = await Coupon.findOne({ name });
//   console.log("KAJSDKAJSDKJAS");
//   // if (coupon) {
//   //   return res.status(400).send("Coupon dose not exist");
//   // }
//   // console.log("COUPEN VALIDITY", Coupon.validity);
//   // coupon = await Coupon.findOneAndUpdate(
//   //   { name },
//   //   {
//   //     $set: req.body,
//   //   }
//   // );
//   // return res.json(coupon);
// });

router.put("/coupon/:name", async (req, res) => {
  console.log("JANSKDJASKDJAKASJDNAKSJNKSJNDKJDNKASJND");
  let name = req.params.name;
  // res.send(name);
  let coupon = await Coupon.findOne({ name });
  if (!coupon) {
    return res.status(400).send("Coupon dose not exist");
  }

  coupon = await Coupon.findOneAndUpdate(
    { name },
    {
      validity: 1,
    }
  );

  return res.json(coupon);
});

router.put("/couponn/:name", async (req, res) => {
  console.log("JANSKDJASKDJAKASJDNAKSJNKSJNDKJDNKASJND");
  let name = req.params.name;
  // res.send(name);
  let coupon = await Coupon.findOne({ name });
  if (!coupon) {
    return res.status(400).send("Coupon dose not exist");
  }

  coupon = await Coupon.findOneAndUpdate(
    { name },
    {
      $set: req.body,
    }
  );

  return res.json(coupon);
});
module.exports = router;
