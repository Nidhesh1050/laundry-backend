const router = require("express").Router();
const { protect, adminOnly } = require("../middleware/auth");

router.get("/dashboard", protect, adminOnly, (req, res) => {
  res.json({ message: "Admin Dashboard" });
});

module.exports = router;
