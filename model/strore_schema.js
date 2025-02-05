const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  price: { type: Number, required: true },
});

const storeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    location: { type: String, required: true },
    items: [itemSchema],
  },
  { timestamps: true } // Adds createdAt and updatedAt fields
);

module.exports = mongoose.model("All_Store", storeSchema);
