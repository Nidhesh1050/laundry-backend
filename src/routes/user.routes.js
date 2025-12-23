const router = require("express").Router();
const { protect, userOnly } = require("../middleware/auth");

router.get("/dashboard", protect, userOnly, (req, res) => {
  res.json({ message: "User Dashboard" });
});

module.exports = router;
