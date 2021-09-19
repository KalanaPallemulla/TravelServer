import express from "express";
import Category from "../models/Category";
import formidable from "express-formidable";
const router = express.Router();

router.post("/category", formidable(), async (req, res) => {
  try {
    const data = req.fields;
    let cat = Category(data);
    await cat.save((err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send("Server Error");
      }
      res.json(result);
    });
  } catch (err) {
    console.log("Error======> ", err);
  }
});

router.get("/category", async (req, res) => {
  try {
    const cat = await Category.find().exec();
    res.json(cat);
  } catch (error) {
    console.log("Error======> ", err);
  }
});

router.get("/category/:id", async (req, res) => {
  try {
    const cat = await Category.findById(req.params.id);
    res.json(cat);
  } catch (err) {
    console.log("Error======> ", err);
  }
});

module.exports = router;
