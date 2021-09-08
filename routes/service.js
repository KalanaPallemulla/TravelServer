const express = require("express");
const Service = require("../models/Service");
const { check, validationResult } = require("express-validator");

const router = express.Router();

router.get("/services", async (req, res) => {
  try {
    const services = await Service.find().sort("-createdAt").exec();
    res.json(services);
  } catch (err) {
    console.error(err.message);
    res.status(400).json("Server Error");
  }
});

router.post(
  "/service",
  check("name", "Name is required").isEmpty(),
  check("price", "Price is required").isEmpty(),
  check("time", "Time is required").isEmpty(),
  check("about", "About is required").isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const data = req.body;

    let service = new Service(data);
    try {
      await service.save();
      res.json(service);
    } catch (err) {
      console.error(err.message);
      res.status(400).json("Server Error");
    }
  }
);

module.exports = router;
