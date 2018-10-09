const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  _creator: { type: Number, ref: User },
  name: {
    type: String,
    required: true,
    unique: true
  },
  ingredients: { type: String },
  description: { type: String },
  price: { type: Number },
  note: String,
  dateCreated: { type: Date, default: Date.now }
});

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;