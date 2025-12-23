const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  pickup_date: Date,
  delivery_date: Date,
  total_price: Number,
  status: {
    type: String,
    enum: [
      "Order Placed",
      "Clothes Received",
      "Washing Done",
      "Out for Delivery",
      "Delivered & Paid"
    ],
    default: "Order Placed"
  }
});

module.exports = mongoose.model("Order", orderSchema);
