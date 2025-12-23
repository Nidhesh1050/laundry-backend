const mongoose = require("mongoose");

const orderItemSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  cloth_type: String,
  color: String,
  quantity: Number,
  price: Number
});

module.exports = mongoose.model("OrderItem", orderItemSchema);
