import express from "express";
import { addService, getServices } from "../controllers/men";
import formidable from "express-formidable";
import Men from "../models/Men";

const router = express.Router();

router.post("/menServices", formidable(), addService);
router.get("/menServices", getServices);
router.get("/menServices/:menId", async (req, res) => {
  try {
    const men = await Men.findById(req.params.menId).exec();
    res.json(men);
  } catch (err) {
    console.log("Error====>", err);
  }
});

module.exports = router;
