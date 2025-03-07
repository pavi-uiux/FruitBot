const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Import the User model

const router = express.Router();

// REGISTER ROUTE
router.post("/register", async (req, res) => {
  try {
    console.log("📥 Incoming Registration Request:", req.body); // Debugging

    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({ message: "Email & Password required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ email, password: hashedPassword });
    await newUser.save();

    console.log("✅ User Registered:", newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("❌ Registration Error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
