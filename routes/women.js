import express from "express";
import { addService, getServices } from "../controllers/women";
import formidable from "express-formidable";
import Women from "../models/Women";

const router = express.Router();

router.post("/womenServices", formidable(), addService);
router.get("/womenServices", getServices);
router.get("/womenServices/:womenId", async (req, res) => {
  try {
    const women = await Women.findById(req.params.womenId).exec();
    res.json(women);
  } catch (err) {
    console.log("Error====>", err);
  }
});

module.exports = router;
