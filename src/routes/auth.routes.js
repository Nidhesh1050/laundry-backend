const router = require("express").Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

router.post("/register", async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
});

router.post("/login", async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(404).json({ message: "User not found" });

  const match = await bcrypt.compare(req.body.password, user.password);
  if (!match) return res.status(401).json({ message: "Wrong password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token, role: user.role });
});

module.exports = router;
