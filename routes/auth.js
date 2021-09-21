import express from "express";
import { createUser, login } from "../controllers/auth";
import formidable from "express-formidable";

const router = express.Router();

router.post("/register", formidable(), createUser);
router.post("/login", formidable(), login);

module.exports = router;
