import express from "express";
import { addService, getServices, image } from "../controllers/services";
import formidable from "express-formidable";
import Services from "../models/Services";

const router = express.Router();

router.post("/services", formidable(), addService);
router.get("/services", getServices);
router.get("/service/:id", async (req, res) => {
  try {
    const service = await Services.findById(req.params.id).exec();
    res.json(service);
  } catch (err) {
    console.log("Error====>", err);
  }
});

router.get("/servicesImage/:id", async (req, res) => {
  try {
    const service = await Services.findById(req.params.id).exec();
    // res.json(service);
    if (service && service.image && service.image.contentType) {
      res.set("Content-Type", service.image.contentType);
      return res.send(service.image.data);
    }
  } catch (err) {
    console.log("Server Error ==> ", err);
  }
});

module.exports = router;
