const router = require("express").Router();
const { protect } = require("../middleware/auth");
const Order = require("../models/Order");
const OrderItem = require("../models/OrderItem");
const Rating = require("../models/Rating");

router.get("/", protect, async (req, res) => {
    const orders = await Order.find({ user: req.user._id }).populate("user");
    res.json(orders);
});