const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
id: {type: Number},
  key: String,
  name:{ type: String, required: true },
  ingredients: { type: String},
  description: { type: String },
//   find type to support decimals
  price: {type: Number},
  date: { type: Date, default: Date.now },
  note: String,
  calories: {type: Number}
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;