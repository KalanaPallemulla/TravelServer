import express from "express";
import { addService, getServices, getKidById } from "../controllers/kid";
import formidable from "express-formidable";
import Kid from "../models/Kid";

const router = express.Router();

router.post("/kidServices", formidable(), addService);
router.get("/kidServices", getServices);
router.get("/kidServices/:kidId", async (req, res) => {
  try {
    const kid = await Kid.findById(req.params.kidId).exec();
    res.json(kid);
  } catch (err) {
    console.log("Error====>", err);
  }
});

module.exports = router;
