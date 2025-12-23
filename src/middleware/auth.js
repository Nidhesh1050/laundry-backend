const jwt = require("jsonwebtoken");
const User = require("../models/User");

const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "No token" });

  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await User.findById(decoded.id).select("-password");
  next();
};

const userOnly = (req, res, next) => {
  if (req.user.role !== "user")
    return res.status(403).json({ message: "User only route" });
  next();
};

const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin")
    return res.status(403).json({ message: "Admin only route" });
  next();
};

module.exports = { protect, userOnly, adminOnly };
