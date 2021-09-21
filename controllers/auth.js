import User from "../models/User";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

export const createUser = async (req, res) => {
  try {
    let data = req.fields;

    if (!data.name) {
      return res.status(400).send("Name is required");
    }
    if (!data.phone) {
      return res.status(400).send("Phone number is required");
    }
    if (!data.location) {
      return res.status(400).send("Location is required");
    }
    if (!data.password) {
      return res.status(400).send("Password is required");
    }
    if (!data.email) {
      return res.status(400).send("Email is required");
    }

    const { email, password } = data;

    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).send("User with this email already exist");
    }

    user = new User(data);

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
      process.env.jwtSecret,
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log("Error =====> ", err);
  }
};

export const login = async (req, res) => {
  try {
    const data = req.fields;

    const { email, password } = data;

    let user = await User.findOne({ email });

    if (!user) {
      return res.status(400).send("User with this email dose not exist");
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).send("Wrong Password");
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.jwtSecret,
      { expiresIn: "5 days" },
      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (err) {
    console.log("Error ====> ", err);
  }
};
