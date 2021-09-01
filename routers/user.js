const express = require("express");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post(
  "/login",
  check("email", "Please include a valid email").isEmail(),
  async (req, res) => {
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        res
          .status(400)
          .json({ errors: [{ msg: "User dose not exist with this email" }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        res.status(400).json({ errors: [{ msg: "Invalid password" }] });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      await jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "7 days" },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server error");
    }
  }
);

router.post(
  "/register",
  check("email", "Please include a valid email").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters"
  ).isLength({ min: 6 }),
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty) {
      res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        res.status(400).json({ errors: [{ msg: "User is already exist" }] });
      }

      user = new User({
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "7 days" },
        (err, token) => {
          if (err) throw err;
          console.log(token);
          res.json({ token });
          console.log("hi");
        }
      );

      //   JWT_SECRET
    } catch (err) {
      console.error(err.message);
      res.status(400).send("Server Error");
    }
  }
);

module.exports = router;
