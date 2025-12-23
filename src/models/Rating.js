const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  stars: { type: Number, min: 1, max: 5 },
  feedback: String
});

module.exports = mongoose.model("Rating", ratingSchema);
