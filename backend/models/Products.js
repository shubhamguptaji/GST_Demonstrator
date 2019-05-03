const mongoose = require("mongoose");

const Productschema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  GST_slab: Number,
  timestamps: {
    type: Date,
    default: Date.now()
  },
  finalPrice: Number
});

module.exports = mongoose.model("Products", Productschema);
