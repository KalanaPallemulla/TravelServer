import express from "express";
import { addService, getServices } from "../controllers/women";
import formidable from "express-formidable";

const router = express.Router();

router.post("/womenServices", formidable(), addService);
router.get("/womenServices", getServices);

module.exports = router;
