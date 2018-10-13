const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const menuSchema = new Schema({
  creator: { type: String },
  submenu: {
    type: String
  },
  items: [{
    submenu: { type: String },
    name: { type: String },
    ingredients: { type: String },
    description: { type: String },
    price: { type: String },
    note: { type: String }
  }],
  dateCreated: { type: Date, default: Date.now }
})

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
